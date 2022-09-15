import { useContext } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { ExamContext } from "../contexts/exam.context";

const ClassListViewScreen = ({ navigation }) => {
  const { currentExam } = useContext(ExamContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={currentExam.students}
        renderItem={({ item }) => (
          <Text>
            {item.name} {item.mark}
          </Text>
        )}
      />
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
