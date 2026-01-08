import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ServicesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* TITLE */}
      <Text style={styles.title} allowFontScaling={false}>
        NOS SERVICES
      </Text>

      {/* SERVICES */}
      <View style={styles.servicesGrid}>
        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => router.push("/cities")}
        >
          <Text style={styles.icon}>🏙️</Text>
          <Text style={styles.cardText}>Villes Hôtes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.serviceCard}
          onPress={() => router.push("/itinerary")}
        >
          <Text style={styles.icon}>🗺️</Text>
          <Text style={styles.cardText}>Itinéraires</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => router.push("/(tabs)/map")}
        >
          <Text style={styles.icon}>📍</Text>
          <Text style={styles.cardText}>Carte Interactive</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => router.push("../fan-id")}
        >
          <Text style={styles.icon}>🎫</Text>
          <Text style={styles.cardText}>Fan ID</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => router.push("../evisa")}
        >
          <Text style={styles.icon}>🧾</Text>
          <Text style={styles.cardText}>eVisa / AEVM</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 110,
    backgroundColor: "#F5F5DC",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7A1F16",
    marginBottom: 12,
    textAlign: "center",
  },

  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },

  serviceCard: {
    flexBasis: "48%",
    backgroundColor: "#7A1F16",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 140,
  },

  icon: {
    fontSize: 40,
    marginBottom: 12,
  },

  cardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
