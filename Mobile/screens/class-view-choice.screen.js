import { View, Button, StyleSheet } from "react-native";

const ClassViewChoiceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Classroom View"
        color="rgb(255, 139, 0)"
        onPress={() => navigation.navigate("classroom-view")}
      />
      <Button
        title="Class List View"
        color="rgb(255, 139, 0)"
        onPress={() => navigation.navigate("class-list-view")}
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

export default ClassViewChoiceScreen;
