import { View, Text, TextInput, Button } from "react-native";

const TeacherDetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Please enter your name:</Text>
      <TextInput placeholder="John Doe" />
      <Button
        title="Submit"
        onPress={() => navigation.navigate("exam-details")}
      />
    </View>
  );
};

export default TeacherDetailsScreen;
