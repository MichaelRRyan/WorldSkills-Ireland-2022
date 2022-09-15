import { View, Text, TextInput, Button } from "react-native";

const ExamDetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Submit"
        onPress={() => navigation.navigate("class-view-choice")}
      />
    </View>
  );
};

export default ExamDetailsScreen;
