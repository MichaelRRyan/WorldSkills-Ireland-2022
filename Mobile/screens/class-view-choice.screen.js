import { View, Text, TextInput, Button } from "react-native";

const ClassViewChoiceScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Classroom View"
        onPress={() => navigation.navigate("classroom-view")}
      />
      <Button
        title="Class List View"
        onPress={() => navigation.navigate("class-list-view")}
      />
    </View>
  );
};

export default ClassViewChoiceScreen;
