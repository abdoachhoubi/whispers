import React, { useContext, useEffect, useRef, useState, useMemo } from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  SafeAreaView,
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

import Feed from "./Feed";
import BottomNavBar from "../../components/BottomNavBar";

const Home = ({ navigation }) => {
  const [current, setCurrent] = useState(0);
  const [iconState, setIconState] = useState(0);
  const scrollRef = useRef(null);
  const switchView = (index) => {
    console.log("Switching to " + index + " view");
    scrollRef.current?.scrollTo({ x: index * WIDTH, y: 0, animated: true });
    setCurrent(index);
    setIconState(index);
  };

  return (
    <SafeAreaView style={{width: "100%", height: "100%"}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        horizontal
        scrollEnabled={true}
        style={styles.swipper}
        ref={scrollRef}
      >
        <Feed width={WIDTH} navigation={navigation} />
        <View
          style={{ width: WIDTH, height: "100%", backgroundColor: "#fff" }}
        ></View>
      </ScrollView>
        <BottomNavBar
          styles={styles}
          width={WIDTH}
          actions={[
            () => switchView(0),
            () => switchView(1),
            () => switchView(2),
          ]}
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
