import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ExamCard from "../components/exam-card.component";

const LandingScreen = ({ navigation }) => {
  const [pastExams, setPastExams] = useState([]);

  useEffect(() => {
    console.log("Looking for past exams.");
    const getPastExams = async () => {
      var exams = [];

      try {
        const jsonValue = await AsyncStorage.getItem("exams");
        if (jsonValue != null) {
          exams = JSON.parse(jsonValue);
        }
      } catch (e) {
        console.warn(e);
      }
      setPastExams(exams);
      console.log("Set past exams to");
      console.log(exams);
    };
    getPastExams();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Button
        title="Launch Exam"
        color="rgb(255, 139, 0)"
        onPress={() => navigation.navigate("teacher-details")}
      />
      <View style={styles.pastExams}>
        <Text style={styles.pastExamsTitle}>Past Exams:</Text>
        <FlatList data={pastExams} renderItem={ExamCard} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(255, 210, 0)",
    flex: 1,
    padding: 20,
  },
  welcome: {
    textAlign: "center",
    fontSize: 24,
    margin: 10,
  },
  pastExams: {
    marginTop: 20,
  },
  pastExamsTitle: {
    fontSize: 20,
  },
});

export default LandingScreen;
