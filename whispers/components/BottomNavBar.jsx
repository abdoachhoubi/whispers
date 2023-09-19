import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import React from "react";

const style = StyleSheet.create({
  bottom_nav_bar_container: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bottom_nav_bar_item: {
    width: 24,
    height: 24,
  },
  bottom_nav_bar_item_icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

const BottomNavBar = ({ styles }) => {
  if (!styles || !styles.bottom_nav_bar_container) {
    styles = style;
  }
  return (
    <View style={styles.bottom_nav_bar_container}>
      <TouchableOpacity style={styles.bottom_nav_bar_item}>
        <Image
          source={require("../assets/home.png")}
          style={styles.bottom_nav_bar_item_icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottom_nav_bar_item}>
        <Image
          source={require("../assets/chat.png")}
          style={styles.bottom_nav_bar_item_icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottom_nav_bar_item}>
        <Image
          source={require("../assets/settings.png")}
          style={styles.bottom_nav_bar_item_icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;
