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

const DeleteAcc = () => {
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
      <View style={{ width: "100%" }}>
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
              Delete Account
            </Text>
          </View>
        </View>
        <View style={styles.whisper_section}>
          <Text style={[{ fontFamily: fonts.regular }, styles.whisper_text]}>
            Deleting your account means all of your posts, comments, replies,
            and any other related data will be erased.{"\n\n"}But rest assured,
            you can come back anytime and create a new account using your email!
          </Text>
        </View>
        <View style={{ width: "100%", padding: 8, paddingHorizontal: 24 }}>
          <Text
            style={[
              { fontFamily: fonts.regular },
              styles.whisper_text,
              { color: "#ff0000" },
            ]}
          >
            Warning: This action will remove all of your data on whispers
            forever!
          </Text>
        </View>
      </View>

      <View style={styles.action_container}>
        <TextInput
          style={[styles.input, { fontFamily: fonts.regular }]}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="rgba(255, 255, 255, .7)"
        />
        <TouchableOpacity
          style={styles.button_container}
          onPress={() => handleLinkPress("https://google.com")}
        >
          <Text style={[{ fontFamily: fonts.medium }, styles.button_text]}>
            Delete Account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DeleteAcc;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
  app_bar_container: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
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
  whisper_section: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  whisper_text: {
    fontSize: 16,
    color: "#fff",
  },
  opac_button: {
    width: "100%",
    paddingVertical: 22,
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  action_container: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
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
    backgroundColor: "#ff0000",
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  button_text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
