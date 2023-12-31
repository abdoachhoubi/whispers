import {
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import BottomNavBar from "../../components/BottomNavBar";
import PostView from "../../components/PostView";
import { fonts } from "../../Contexts";

const data = [
  {
    postContent: "Hey, what's your favorite study spot on campus?",
    date: "10 Nov 2023, 12:00 AM",
    liked: false,
    sensitive: false,
  },
  {
    postContent: "Fuck Microsoft!",
    date: "10 Nov 2023, 12:00 AM",
    liked: false,
    sensitive: true,
  },
  {
    postContent:
      "Hey there, I've been pondering this question lately: What's the most significant change you'd like to see on our campus? It could be anything, big or small. Share your thoughts and let's spark some positive change together!",
    date: "10 Nov 2023, 12:00 AM",
    liked: true,
    sensitive: false,
  },
  {
    postContent: "Anonymous compliment: You have a great sense of style!",
    date: "10 Nov 2023, 12:00 AM",
    liked: true,
    sensitive: false,
  },
];

const Feed = ({ navigation, width }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [dataSource, setDataSource] = React.useState(data);
  const [whispershow, setWhispershow] = useState(true);

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event) => {
    const currentY = event.nativeEvent.contentOffset.y;
    if (currentY > scrollY) {
      setWhispershow(false);
    } else if (currentY < scrollY) {
      setWhispershow(true);
    } else {
      setWhispershow(true);
    }
    setScrollY(currentY);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setDataSource((current) => [
      {
        postContent: "Mavericks?",
        date: "10 Nov 2023, 12:00 AM",
        liked: false,
        sensitive: false,
      },
      ...current,
    ]);
    if (dataSource.length > 5) {
      setDataSource(dataSource.slice(0, 4));
    }
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={[styles.container, { width: width }]}>
      <View style={styles.app_bar_container}>
        <Image
          source={require("../../assets/logo-s-solid.png")}
          style={styles.logo_s_solid}
        />
      </View>
      <FlatList
        onScroll={handleScroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.flatlist}
        data={dataSource}
        keyExtractor={(_, index) => index.toString()}
        renderItem={(item) => (
          <PostView data={item} fonts={fonts} navigation={navigation} />
        )}
      />
      <BottomNavBar />
      {whispershow && (
        <TouchableOpacity
          style={styles.whisper_button}
          onPress={() => navigation.navigate("Post")}
        >
          <Text style={[{ fontFamily: fonts.medium }, styles.whispers_text]}>
            Add a whisper
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
    paddingBottom: 64,
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
  flatlist: {
    width: "100%",
    boxSize: "border-box",
  },
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
  whisper_button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#D8492B",
    borderRadius: 100,
    position: "absolute",
    bottom: 80,
    right: 16,
  },
  whispers_text: {
    fontSize: 16,
    color: "#fff",
  },
});
