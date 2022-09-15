import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ClassListViewScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Conclude Exam"
        color="rgb(255, 139, 0)"
        onPress={() => navigation.navigate("landing")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(255, 210, 0)",
    flex: 1,
  },
});

export default ClassListViewScreen;
