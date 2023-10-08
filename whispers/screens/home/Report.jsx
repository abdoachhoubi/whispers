import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
  TouchableOpacity,
  TextInput
} from "react-native";
import React from "react";
import { fonts } from "../../Contexts";

const Report = () => {
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
      <View style={{width: "100%"}}>
        <View style={styles.app_bar_container}>
          <Image
            source={require("../../assets/logo-s-solid.png")}
            style={styles.logo_s_solid}
          />
        </View>
        <View style={styles.whisper_section}>
          <Text style={[{ fontFamily: fonts.regular }, styles.heading]}>
            Report whisper:
          </Text>
          <Text style={[{ fontFamily: fonts.regular }, styles.whisper_text]}>
            {"\n"}
            {whisper}
          </Text>
        </View>
        <View style={{width: "100%", padding: 8}}>
          <Text style={[{ fontFamily: fonts.regular }, styles.whisper_text]}>
            Prior to flagging this post, we recommend reviewing our Terms of Use and Standards.
          </Text>
          <TouchableOpacity
		  style={{width: "100%", paddingVertical: 22, display: "flex",alignItem: "center", justifyContent: "center", backgroundColor: "#fff", paddingHorizontal: 16, borderRadius: 8, marginTop: 16}}
            onPress={() => handleLinkPress("https://google.com")}
          >
            <Text style={[{ fontFamily: fonts.regular }, styles.heading, {fontSize: 16, textAlign: "center"}]}>
              Terms of Use and Standards
            </Text>
          </TouchableOpacity>
        </View>
      </View>
	  <View style={{width: "100%"}}>
	  <TextInput
            style={[styles.input, { fontFamily: fonts.regular }]}
            placeholder="Reason for flagging"
            placeholderTextColor="#fff"
          />
	  </View>
    </SafeAreaView>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
  },
  app_bar_container: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "rgba(255, 255, 255, .8)",
    borderBottomWidth: 1,
  },
  heading: {
    fontSize: 32,
    color: "#fff",
  },
  logo_s_solid: {
    width: 25,
    height: 22,
    marginTop: 12,
  },
  heading_container: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 22,
    color: "#D8492B",
  },
  whisper_section: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomColor: "rgba(255, 255, 255, .8)",
    borderBottomWidth: 1,
  },
  whisper_text: {
    fontSize: 16,
    color: "#fff",
  },
  input :{
	width: "100%",
    paddingVertical: 16,
    borderColor: "#fff",
    borderWidth: 1,
    color: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 24,
  }
});
