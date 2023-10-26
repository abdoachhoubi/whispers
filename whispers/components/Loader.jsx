import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts } from "../Contexts";

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.loader_text, { fontFamily: fonts.semiBold }]}>
        Loading...
      </Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#000",
    zIndex: 100,
  },
  loader_text: {
    fontSize: 32,
    color: "#fff",
  },
});
