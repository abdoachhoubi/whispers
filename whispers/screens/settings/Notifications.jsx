import {
  StyleSheet,
  Text,
  View,
  Switch,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { fonts } from "../../Contexts";

const Notifications = () => {
  const [switch_1, setSwitch_1] = useState(false);
  const [switch_2, setSwitch_2] = useState(false);
  const [switch_3, setSwitch_3] = useState(false);

  const toggleSwitch1 = () => setSwitch_1((previousState) => !previousState);
  const toggleSwitch2 = () => setSwitch_2((previousState) => !previousState);
  const toggleSwitch3 = () => setSwitch_3((previousState) => !previousState);
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
            Notifications Settings
          </Text>
        </View>
      </View>

      <View style={styles.main_container}>
        <TouchableOpacity
          style={[
            styles.button_container,
            switch_1
              ? { borderColor: "#D8492B" }
              : { borderColor: "rgba(255, 255, 255, .8)" },
          ]}
          onPress={toggleSwitch1}
        >
          <Text style={[styles.button_text, { fontFamily: fonts.regular }]}>
            Posts
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#D8492B" }}
            thumbColor={switch_1 ? "#D8492B" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch1}
            value={switch_1}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button_container,
            switch_2
              ? { borderColor: "#D8492B" }
              : { borderColor: "rgba(255, 255, 255, .8)" },
          ]}
          onPress={toggleSwitch2}
        >
          <Text style={[styles.button_text, { fontFamily: fonts.regular }]}>
            Comments
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#D8492B" }}
            thumbColor={switch_2 ? "#D8492B" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={switch_2}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button_container,
            switch_3
              ? { borderColor: "#D8492B" }
              : { borderColor: "rgba(255, 255, 255, .8)" },
          ]}
          onPress={toggleSwitch3}
        >
          <Text style={[styles.button_text, { fontFamily: fonts.regular }]}>
            Messages
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#D8492B" }}
            thumbColor={switch_3 ? "#D8492B" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={switch_3}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;

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
  main_container: {
    width: "100%",
    height: "100%",
    display: "flex",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  button_container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 8,
  },
  button_text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: fonts.regular,
  },
});
