import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { openGoogleMaps } from "../src/services/openGoogleMaps";

import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { cities } from "@/data/cities";
import { monuments } from "@/data/monuments";

export default function MonumentDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const monument = monuments.find((m) => m.id === id);
  const city = cities.find((c) => c.id === monument?.cityId);

  if (!monument) {
    return (
      <ThemedView style={styles.center}>
        <ThemedText>Monument non trouvé</ThemedText>
      </ThemedView>
    );
  }

  // ✅ STATUS PAR DÉFAUT
  const status = monument.status ?? "open";

  const destination = `${monument.name}, ${city?.name}`;

  const handleOpenMap = () => {
    if (status === "repair") {
      Alert.alert(
        "Monument en réparation",
        "Ce monument est actuellement en réparation. Souhaitez-vous quand même afficher l’itinéraire ?",
        [
          { text: "Annuler", style: "cancel" },
          { text: "Continuer", onPress: () => openGoogleMaps(destination) },
        ]
      );
    } else {
      openGoogleMaps(destination);
    }
  };

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: monument.photos?.[0] || "https://via.placeholder.com/900x500",
          }}
          style={styles.image}
          contentFit="cover"
        />

        <ThemedText style={styles.title}>
          {monument.name}
        </ThemedText>

        {/* ✅ STATUS */}
        <View style={styles.statusRow}>
          <View
            style={[
              styles.statusDot,
              status === "open" && styles.dotOpen,
              status === "repair" && styles.dotRepair,
              status === "closed" && styles.dotClosed,
            ]}
          />
          <ThemedText style={styles.statusText}>
            {status === "open" && "Ouvert"}
            {status === "repair" && "En réparation"}
            {status === "closed" && "Fermé"}
          </ThemedText>
        </View>

        <ThemedText style={styles.city}>
          {city?.name}
        </ThemedText>

        <ThemedText style={styles.description}>
          {monument.description}
        </ThemedText>

        <View style={styles.infoBox}>
          <Info label="Horaires" value={monument.hours} />
          <Info label="Prix d'entrée" value={monument.price} />
        </View>

        <TouchableOpacity
          style={[
            styles.mapButton,
            status === "closed" && { opacity: 0.5 },
          ]}
          disabled={status === "closed"}
          onPress={handleOpenMap}
        >
          <ThemedText style={styles.mapText}>
            Voir sur Google Maps
          </ThemedText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <ThemedText style={styles.infoLabel}>{label}</ThemedText>
      <ThemedText style={styles.infoValue}>{value}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#F2F2F2",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "100%",
    maxWidth: 820,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 16,
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#7A1F16",
    textAlign: "center",
    marginBottom: 6,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    gap: 8,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  dotOpen: {
    backgroundColor: "#2E7D32",
  },

  dotRepair: {
    backgroundColor: "#F9A825",
  },

  dotClosed: {
    backgroundColor: "#C62828",
  },

  statusText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
  },

  city: {
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    marginBottom: 22,
    fontStyle: "italic",
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#333",
    marginBottom: 30,
  },

  infoBox: {
    gap: 16,
    marginBottom: 30,
  },

  infoRow: {
    backgroundColor: "#FAFAFA",
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
  },

  infoLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7A1F16",
    marginBottom: 4,
  },

  infoValue: {
    fontSize: 15,
    color: "#333",
  },

  mapButton: {
    backgroundColor: "#7A1F16",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },

  mapText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
  },
});
