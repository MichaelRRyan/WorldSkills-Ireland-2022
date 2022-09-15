import { View, Text, StyleSheet } from "react-native";

const ExamCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text>Subject: {item.subject}</Text>
      <Text>Teacher: {item.teacherName}</Text>
      <Text>Scheduled for: {new Date(item.date).toLocaleString()}</Text>
      <Text>Duration: {new Date(item.duration).toLocaleTimeString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default ExamCard;
