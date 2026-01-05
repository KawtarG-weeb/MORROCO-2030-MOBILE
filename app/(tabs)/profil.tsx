import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function ProfileTab() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <Text style={styles.name}>Nom d'utilisateur</Text>
        <Text style={styles.email}>user@email.com</Text>
      </View>

      {/* ACTIONS */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardIcon}>👤</Text>
        <Text style={styles.cardText}>Modifier mon profil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardIcon}>🔒</Text>
        <Text style={styles.cardText}>Modifier mon mot de passe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardIcon}>🌍</Text>
        <Text style={styles.cardText}>Langue des notifications</Text>
        <Text style={styles.cardValue}>Français</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card, styles.dangerCard]}>
         <Text style={styles.cardIcon}>🗑️</Text>
        <Text style={styles.cardText}>Supprimer mon compte</Text>
        
      </TouchableOpacity>
      

      {/* LOGOUT */}
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Déconnexion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5DC",
    padding: 16,
    paddingBottom: 120, // évite que la TabBar cache le contenu
  },

  header: {
    alignItems: "center",
    marginBottom: 24,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "#7A1F16",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  avatarText: {
    fontSize: 36,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  email: {
    fontSize: 14,
    color: "#555",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#86261eff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },

  cardIcon: {
    fontSize: 22,
    marginRight: 12,
    color: "#a25656ff",
  },

  cardText: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  cardValue: {
    color: "#FFD9C9",
    fontWeight: "bold",
  },

  dangerCard: {
    backgroundColor: "rgba(155, 48, 39, 1)",
  },

  logout: {
    marginTop: 20,
    backgroundColor: "#8e291eff",
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
