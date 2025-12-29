import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NOS SERVICES</Text>

      <View style={styles.servicesGrid}>
        <TouchableOpacity 
          style={styles.serviceCard}
          onPress={() => router.push("/cities")}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🏙️</Text>
          </View>
          <Text style={styles.cardText}>Villes Hôtes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.serviceCard}
          onPress={() => router.push("/(tabs)/explore")}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🏛️</Text>
          </View>
          <Text style={styles.cardText}>Monuments</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.serviceCard}
          onPress={() => router.push("/itinerary")}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🗺️</Text>
          </View>
          <Text style={styles.cardText}>Itinéraires</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.serviceCard}
          onPress={() => router.push("/(tabs)/map")}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>📍</Text>
          </View>
          <Text style={styles.cardText}>Carte Interactive</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.serviceCard}
          onPress={() => router.push("/(tabs)/fanid")}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🎫</Text>
          </View>
          <Text style={styles.cardText}>Fan ID</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.serviceCard}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🧾</Text>
          </View>
          <Text style={styles.cardText}>eVisa / AEVM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5DC",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7A1F16",
    marginBottom: 24,
    textAlign: "center",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-between",
  },
  serviceCard: {
    width: "47%",
    backgroundColor: "#7A1F16",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 140,
  },
  iconContainer: {
    marginBottom: 12,
  },
  icon: {
    fontSize: 40,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

