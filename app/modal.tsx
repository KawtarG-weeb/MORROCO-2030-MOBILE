import { useLanguage } from "@/context";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LanguageModal() {
  const { visible, close, setLang, lang } = useLanguage();

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>Sélectionner la langue</Text>

          {(["ar", "fr", "en"] as const).map(l => (
            <TouchableOpacity
              key={l}
              style={[
                styles.option,
                 styles.selected
              ]}
              onPress={() => {
               
                close();
              }}
            >
              <Text style={styles.optionText}>{l}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  option: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    marginTop: 10,
  },
  selected: {
    borderWidth: 2,
    borderColor: "#7A1F16",
  },
  optionText: {
    fontSize: 16,
  },
});
