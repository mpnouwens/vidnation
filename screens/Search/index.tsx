import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.text}>Find movies series & episodes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 50,
  },
  text: {
    marginTop: 100,
  },
});
