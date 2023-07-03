import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home here</Text>
    </View>
  );
}
