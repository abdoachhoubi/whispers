import React, { useContext, useEffect, useRef, useState, useMemo } from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  SafeAreaView,
  Text
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

import Feed from "./Feed";
import BottomNavBar from "../../components/BottomNavBar";

const Home = ({ navigation }) => {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  const switchView = (index) => {
    scrollRef.current?.scrollTo({ x: index * WIDTH, y: 0, animated: true });
    setCurrent(index);
  };

  return (
    <SafeAreaView style={{width: "100%", height: "100%"}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        horizontal
        scrollEnabled={false}
        style={styles.swipper}
        ref={scrollRef}
      >
        <Feed width={WIDTH} navigation={navigation} />
        <View
          style={{ width: WIDTH, height: "100%", backgroundColor: "#fff", alignItems: "center", justifyContent: "center" }}
        >
			<Text>View 2</Text>
		</View>
		<View
          style={{ width: WIDTH, height: "100%", backgroundColor: "#fff", alignItems: "center", justifyContent: "center" }}
        >
			<Text>View 3</Text>
		</View>
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
