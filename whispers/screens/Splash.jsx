import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useEffect } from "react";

import {fonts} from "../Contexts"

const Splash = ({navigation}) => {

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate("Welcome");
		}, 2000);
	}
	, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-xl-opac.png")}
        style={styles.logo_xl_opac}
      />
      <Text style={[{ fontFamily: fonts.medium }, styles.heading]}>
        Whispers
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    color: "#fff",
  },
  logo_xl_opac: {
    position: "absolute",
  },
});
