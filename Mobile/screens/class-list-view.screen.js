import { View, Text, TextInput, Button } from "react-native";

const ClassListViewScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Conclude Exam"
        onPress={() => navigation.navigate("landing")}
      />
    </View>
  );
};

export default ClassListViewScreen;
