import { View, Text, Button, StyleSheet } from "react-native";

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Button
        title="Launch Exam"
        color="rgb(255, 139, 0)"
        onPress={() => navigation.navigate("teacher-details")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(255, 210, 0)",
    flex: 1,
  },
  welcome: {
    textAlign: "center",
    fontSize: 24,
    margin: 10,
  },
});

export default LandingScreen;
