import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { fonts } from "../../Contexts";

const Contatc = () => {
  const whisper = "Hey, what's your favorite study spot on campus?";
  const handleLinkPress = async (url) => {
    // Use Linking to open the URL in the device's default browser
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error(`Don't know how to open URL: ${url}`);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.app_bar} removeClippedSubviews={false}>
        <Image
          source={require("../../assets/logo-s-solid.png")}
          style={styles.logo_s_solid}
        />
        <View
          style={{ overflow: "visible", marginLeft: 16, height: 24 }}
          removeClippedSubviews={false}
        >
          <Text style={[{ fontFamily: fonts.medium }, styles.heading]}>
            Contatc us
          </Text>
        </View>
      </View>

      <View style={styles.action_container}>
        <TextInput
          style={[styles.input, { fontFamily: fonts.regular }]}
          placeholder="Say Hi +_+"
          placeholderTextColor="rgba(255, 255, 255, .7)"
        />
        <TouchableOpacity
          style={styles.button_container}
          onPress={() => handleLinkPress("https://google.com")}
        >
          <Text style={[{ fontFamily: fonts.medium }, styles.button_text]}>
            Send Message
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Contatc;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: 64,
  },
  app_bar: {
    width: "100%",
    paddingVertical: 24,
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomColor: "rgba(255, 255, 255, .8)",
    borderBottomWidth: 1,
  },
  logo_s_solid: {
    width: 25,
    height: 22,
    marginTop: 12,
  },
  heading: {
    color: "#fff",
    fontSize: 26,
    position: "absolute",
    zIndex: 100,
  },
  action_container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  input: {
    // creating a single line border at the bottom of the TextInput Component
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 8,
    color: "#fff",
    fontSize: 16,
  },
  button_container: {
    width: "100%",
    paddingVertical: 22,
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  button_text: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
});
