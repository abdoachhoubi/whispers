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

import CheckBox from "expo-checkbox";
import React, { useState } from "react";
import { fonts } from "../../Contexts";

const Post = () => {
  const [flagged, setFlagged] = useState(false);
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
      <View style={styles.app_bar_container}>
        <Image
          source={require("../../assets/logo-s-solid.png")}
          style={styles.logo_s_solid}
        />
      </View>

      <View style={styles.action_container}>
        <TextInput
          multiline={true}
          numberOfLines={20}
          verticalAlign="top"
          style={[
            styles.input,
            { fontFamily: fonts.regular, textAlignVertical: "top" },
          ]}
          placeholder="What's on your mind?"
          placeholderTextColor="rgba(255, 255, 255, .7)"
        />
      </View>
      <View style={{ width: "100%", padding: 16 }}>
        <TouchableOpacity
          onPress={() => setFlagged(!flagged)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <CheckBox
            style={{ alignSelf: "flex-start", marginRight: 8 }}
            value={flagged}
            onValueChange={setFlagged}
            disabled={false}
            color={flagged ? "#D8492B" : "#fff"}
          />
          <Text style={[{ fontFamily: fonts.regular }, styles.whisper_text]}>
            Sensitivity Warning
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_container}>
          <Text style={[{ fontFamily: fonts.medium }, styles.button_text]}>
            Publish
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Post;

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
    flexGrow: 1,
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  input: {
    // creating a single line border at the bottom of the TextInput Component
    // borderBottomWidth: 1,
    // borderBottomColor: "#fff",
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
