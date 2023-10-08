import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import React  from "react";

const styles = StyleSheet.create({
  bottom_nav_bar_container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // width: "100%",
    height: 64,
    paddingVertical: 8,
    position: "absolute",
    bottom: 0,
    left: 0,
    elevation: 6,
    zIndex: 9,
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


const NavIcon = ({ action, src, isActive }) => {
  return (
    <TouchableOpacity style={styles.bottom_nav_bar_item} onPress={action}>
      <Image
        source={src}
        //   style={[ContainerStyles.icon, isActive && ContainerStyles.bold_icon]}
        style={styles.bottom_nav_bar_item_icon}
      />
    </TouchableOpacity>
  );
};

const BottomNavBar = ({ action, width, current }) => {

  return (
    <View style={[styles.bottom_nav_bar_container, {width: width}]}>
      <NavIcon action={() => action(0)} src={current == 0 ? require("../assets/home-active.png") : require("../assets/home.png")} />
      <NavIcon action={() => action(1)} src={current == 1 ? require("../assets/chat-active.png") : require("../assets/chat.png")} />
      <NavIcon action={() => action(2)} src={current == 2 ? require("../assets/settings-active.png") : require("../assets/settings.png")} />
      {/* <TouchableOpacity style={styles.bottom_nav_bar_item}>
		
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
      </TouchableOpacity> */}
    </View>
  );
};

export default BottomNavBar;
