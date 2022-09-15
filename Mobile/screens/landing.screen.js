import { View, Text, Button } from "react-native";

const LandingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Button
        title="Launch Exam"
        onPress={() => navigation.navigate("teacher-details")}
      />
    </View>
  );
};

export default LandingScreen;
