import { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
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

  const showMode = (onChange, currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatePicker = () => {
    showMode(onChangeDate, "date");
  };

  const showTimePicker = () => {
    showMode(onChangeDate, "time");
  };

  const showDurationPicker = () => {
    showMode(onChangeDate, "time");
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
    <View>
      <Text>Please enter the exam details:</Text>

      <View>
        <Text>Subject:</Text>
        <TextInput
          onTextChanged={onSubjectTextChanged}
          placeholder="Economics"
        />

        <Text>Start Date:</Text>
        <Button onPress={showDatePicker} title={date.toLocaleDateString()} />

        <Text>Start Time:</Text>
        <Button onPress={showTimePicker} title={date.toLocaleTimeString()} />

        <Text>Duration:</Text>
        <Button
          onPress={showDurationPicker}
          title={duration.toLocaleTimeString()}
        />
      </View>

      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
};

export default ExamDetailsScreen;
