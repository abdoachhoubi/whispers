import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

import {fonts} from "../Contexts";

const Welcome = () => {

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-xl-solid.png")}
        style={styles.logo_xl_opac}
      />
      <View style={styles.section__container}>
        <Text style={[{ fontFamily: fonts.bold }, styles.heading]}>
          Whispers?
        </Text>
        <Text style={[{ fontFamily: fonts.regular }, styles.text]}>
          Send messages, ask questions, and share thoughts without revealing
          your identity.
        </Text>
        <TouchableOpacity style={styles.button_container}>
          <Text style={[{ fontFamily: fonts.bold }, styles.button_text]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logo_xl_opac: {
    width: "120%",
  },
  section__container: {
    width: "90%",
  },
  heading: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 32,
  },
  button_container: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 8,
  },
  button_text: {
    fontSize: 18,
    color: "#000",
  },
});
