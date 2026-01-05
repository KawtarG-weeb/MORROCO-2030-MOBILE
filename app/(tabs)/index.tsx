import { router } from "expo-router";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function HomeTab() {
  const { width } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HERO */}
      <ImageBackground
        source={require("@/assets/images/wc.png")}
        style={[styles.hero, { height: Math.min(width * 0.7, 420) }]}
      >
        <View style={styles.overlay} />
        <Animated.Text
          entering={FadeInUp.duration(700)}
          style={styles.title}
          allowFontScaling={false}
        >
          VIBREZ{"\n"}CÉLÉBREZ{"\n"}MOROCCO 2030
        </Animated.Text>
      </ImageBackground>

      {/* SERVICES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle} allowFontScaling={false}>
          NOS SERVICES
        </Text>

        {/* CARTES */}
        <View style={styles.servicesRow}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/cities")}
          >
            <Text style={styles.cardIcon}>🏙️</Text>
            <Text style={styles.cardText}>Villes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("../monuments")}
          >
            <Text style={styles.cardIcon}>🏛️</Text>
            <Text style={styles.cardText}>Monuments</Text>
          </TouchableOpacity>
        </View>

        {/* BOUTONS */}
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>🔑 Se connecter</Text>
          <Text style={styles.arrow}>↗</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.actionText}>📖 Créer un compte</Text>
          <Text style={styles.arrow}>↗</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 110,
    backgroundColor: "#E5E5E5",
  },
  hero: {
    justifyContent: "flex-end",
    padding: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(122,31,22,0.75)",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#7A1F16",
  },
  servicesRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#7A1F16",
    paddingVertical: 28,
    borderRadius: 16,
    alignItems: "center",
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  cardText: {
    color: "#fff",
    fontWeight: "bold",
  },
  actionBtn: {
    backgroundColor: "#7A1F16",
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  arrow: {
    color: "#4CAF50",
    fontSize: 18,
    fontWeight: "bold",
  },
});
