import { ThemedText } from "@/components/themed-text";
import { cities } from "@/data/cities";
import { router } from "expo-router";
import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CitiesScreen() {
  return (
    <FlatList
      data={cities}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push(`/cities/${item.id}`)}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <ThemedText type="subtitle">{item.name}</ThemedText>
          <ThemedText>{item.description}</ThemedText>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 160,
  },
});
