import { Image, Text, View, StyleSheet } from "react-native";

const NavHeader = ({ children, tintColor }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-wsg-school.png")}
      />
      <Text style={{ ...styles.title, color: tintColor }}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    margin: 20,
    fontSize: 20,
  },
  logo: {
    height: 80,
    width: 120,
  },
});

export default NavHeader;
