import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";

import { fonts } from "../../Contexts";

const Email = () => {
  const [logo, setLogo] = useState(true);

  const hideLogo = () => {
    setLogo(false);
  };
  const showLogo = () => {
    setLogo(true);
  };

  useEffect(() => {
    // Add event listeners when the component mounts
    Keyboard.addListener("keyboardDidShow", hideLogo);
    Keyboard.addListener("keyboardDidHide", showLogo);

    // Don't forget to remove the listeners when the component unmounts
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      {logo && (
        <>
          <Image
            source={require("../../assets/logo-s-solid.png")}
            style={styles.logo_s_solid}
          />
          <Image
            source={require("../../assets/logo-xl-opac.png")}
            style={styles.logo_xl_opac}
          />
        </>
      )}
      <View style={styles.section__container}>
        <Text style={[styles.heading, { fontFamily: fonts.bold }]}>
          Confirm your email
        </Text>
        <Text
          style={[
            styles.text,
            { fontFamily: fonts.regular },
            { marginBottom: "auto" },
          ]}
        >
          Let's check if you are who you pretend to be -_-
        </Text>
        <Text style={[styles.text, { fontFamily: fonts.regular }]}>
          Check your email!
        </Text>
        <KeyboardAvoidingView style={styles.input_container}>
          <TextInput
            style={[styles.input, { fontFamily: fonts.regular }]}
            placeholder="Email"
            placeholderTextColor="#fff"
          />
          <TouchableOpacity style={styles.forgot_password}>
            <Text
              style={[
                styles.forgot_password_text,
                { fontFamily: fonts.regular },
              ]}
            >
              Resend Email
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.button_container}>
          <Text style={[styles.button_text, { fontFamily: fonts.bold }]}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Email;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 32,
  },
  logo_s_solid: {
    width: 33,
    height: 30,
    position: "absolute",
    top: 32,
    left: 32,
  },
  logo_xl_opac: {
    position: "absolute",
    top: 64,
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
    marginBottom: 24,
  },
  input_container: {
    width: "100%",
    height: "auto",
    marginVertical: 32,
    marginBottom: 24,
  },
  input: {
    width: "100%",
    paddingVertical: 16,
    borderColor: "#fff",
    borderWidth: 1,
    color: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  forgot_password: {
    width: "100%",
    height: "auto",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  forgot_password_text: {
    fontSize: 16,
    color: "#fff",
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
