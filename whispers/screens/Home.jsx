import React, { useContext, useEffect, useRef, useState, useMemo } from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  SafeAreaView,
  Text,
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

import Feed from "./feed/Feed";
import Messages from "./chat/Messages";
import Settings from "./settings/Settings";

import BottomNavBar from "../components/BottomNavBar";

const Home = ({ navigation }) => {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  const switchView = (index) => {
    scrollRef.current?.scrollTo({ x: index * WIDTH, y: 0, animated: true });
    setCurrent(index);
  };

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      if (e.data.action.type === "GO_BACK") e.preventDefault();
    });

    return () => {
      navigation.removeListener("beforeRemove", (e) => {
        if (e.data.action.type === "GO_BACK") e.preventDefault();
      });
    };
  }, []);

  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        horizontal
        scrollEnabled={true}
        style={styles.swipper}
        ref={scrollRef}
        onScroll={(e) => {
          setCurrent(Math.round(e.nativeEvent.contentOffset.x / WIDTH));
        }}
      >
        <Feed width={WIDTH} navigation={navigation} />
        <Messages width={WIDTH} navigation={navigation} />
        <Settings width={WIDTH} navigation={navigation} />
      </ScrollView>
      <BottomNavBar
        styles={styles}
        width={WIDTH}
        action={switchView}
        current={current}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  swipper: {
    flex: 1,
  },
});

export default Home;
