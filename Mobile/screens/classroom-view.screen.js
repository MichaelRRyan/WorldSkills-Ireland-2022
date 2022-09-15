import { View, Text, TextInput, Button } from "react-native";

const ClassroomViewScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Conclude Exam"
        onPress={() => navigation.navigate("landing")}
      />
    </View>
  );
};

export default ClassroomViewScreen;
