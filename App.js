import { StatusBar } from "expo-status-bar"
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title='Click me'
        color={`red`}
        onPress={() => alert("Hello world")}
      />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
