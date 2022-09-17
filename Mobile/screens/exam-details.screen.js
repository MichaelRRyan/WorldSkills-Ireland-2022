import { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { ExamContext } from "../contexts/exam.context";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const ExamDetailsScreen = ({ navigation }) => {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState(new Date(2022, 0, 15, 9, 0, 0));
  const [duration, setDuration] = useState(new Date(2022, 0, 15, 1, 0, 0));
  const { currentExam, setCurrentExam } = useContext(ExamContext);

  const onSubjectTextChanged = (text) => {
    setSubject(text);
  };

  const onChangeDate = (event, selectedDate) => {
    setDate(selectedDate);
  };

  const onChangeDuration = (event, selectedDate) => {
    setDuration(selectedDate);
  };

  const showMode = (value, onChange, currentMode) => {
    DateTimePickerAndroid.open({
      value,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatePicker = () => {
    showMode(date, onChangeDate, "date");
  };

  const showTimePicker = () => {
    showMode(date, onChangeDate, "time");
  };

  const showDurationPicker = () => {
    showMode(duration, onChangeDuration, "time");
  };

  const onSubmit = () => {
    setCurrentExam({
      ...currentExam,
      subject,
      date,
      duration,
    });
    navigation.navigate("class-view-choice");
  };

  return (
    <View style={styles.container}>
      <Text>Please enter the exam details:</Text>

      <View>
        <Text>Subject:</Text>
        <TextInput
          value={subject}
          onChangeText={onSubjectTextChanged}
          placeholder="Economics"
        />

        <Text>Start Date:</Text>
        <Button
          title={date.toLocaleDateString()}
          color="rgb(255, 139, 0)"
          onPress={showDatePicker}
        />

        <Text>Start Time:</Text>
        <Button
          title={date.toLocaleTimeString()}
          color="rgb(255, 139, 0)"
          onPress={showTimePicker}
        />

        <Text>Duration:</Text>
        <Button
          title={duration.toLocaleTimeString()}
          color="rgb(255, 139, 0)"
          onPress={showDurationPicker}
        />
      </View>

      <Button title="Submit" color="rgb(255, 139, 0)" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(255, 210, 0)",
    flex: 1,
  },
});

export default ExamDetailsScreen;
