import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileTab() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>👤</Text>
      </View>

      <Text style={styles.name}>Nom d'utilisateur</Text>

      {[
        "Modifier mon profil",
        "Modifier mon mot de passe",
        "Langue des notifications",
        "Supprimer mon compte",
      ].map(item => (
        <TouchableOpacity key={item} style={styles.item}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.logout}>
        <Text style={{ color: "#cff2f1ff" }}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatar: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#7A1F16",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 40,
  },
  name: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
  },
  item: {
    padding: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    marginBottom: 10,
  },
  logout: {
    marginTop: 20,
    backgroundColor: "#C0392B",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
});
