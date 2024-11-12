import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { BasketContext } from "./Context"; // Pastikan path ini sesuai dengan lokasi file Anda
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <BasketContext>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <StackNavigator />
      </View>
    </BasketContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
