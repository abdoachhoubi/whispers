import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { fonts } from "../../Contexts";

const Settings = ({ width, navigation }) => {
  return (
    <SafeAreaView style={[{ width: width }, styles.container]}>
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
            Settings
          </Text>
        </View>
      </View>
      <View style={styles.main_container}>
        <View style={styles.buttons_container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Account")}
          >
            <Text style={[{ fontFamily: fonts.regular }, styles.button_text]}>
              Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Text style={[{ fontFamily: fonts.regular }, styles.button_text]}>
              Notifications
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Bug")}
          >
            <Text style={[{ fontFamily: fonts.regular }, styles.button_text]}>
              Bug Report
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("Contact")}
          >
            <Text style={[{ fontFamily: fonts.regular }, styles.button_text]}>
              Contact us
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Welcome")}
          style={[styles.button, styles.red_border, { width: width - 48 }]}
        >
          <Text
            style={[
              { fontFamily: fonts.regular },
              styles.button_text,
              styles.red_text,
            ]}
          >
            Sign out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
  main_container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 92,
  },
  buttons_container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: 16,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginHorizontal: 24,
    marginVertical: 8,
    borderColor: "rgba(255, 255, 255, .8)",
    borderWidth: 1,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  red_border: {
    borderColor: "#ff0000",
  },
  button_text: {
    color: "#fff",
    fontSize: 16,
  },
  red_text: {
    color: "#ff0000",
  },
});
