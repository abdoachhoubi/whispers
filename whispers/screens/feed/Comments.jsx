import {
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import PostView from "../../components/PostView";
import Loader from "../../components/Loader";

import { fonts } from "../../Contexts";

const data = [
  {
    id: 1,
    postContent: "Hey, what's your favorite study spot on campus?",
    date: "10 Nov 2023, 12:00 AM",
    liked: false,
    sensitive: false,
  },
  {
    id: 2,
    postContent: "Share your favorite book or movie recommendation!",
    date: "10 Nov 2023, 12:00 AM",
    liked: true,
    sensitive: true,
  },
  {
    id: 3,
    postContent:
      "Hey there, I've been pondering this question lately: What's the most significant change you'd like to see on our campus? It could be anything, big or small. Share your thoughts and let's spark some positive change together!",
    date: "10 Nov 2023, 12:00 AM",
    liked: true,
    sensitive: false,
  },
  {
    id: 4,
    postContent: "Anonymous compliment: You have a great sense of style!",
    date: "10 Nov 2023, 12:00 AM",
    liked: true,
    sensitive: false,
  },
];

const Comments = ({ navigation }) => {
  const whisper = "Hey, what's your favorite study spot on campus?";

  const [refreshing, setRefreshing] = React.useState(false);
  const [dataSource, setDataSource] = React.useState(data);
  const [whispershow, setWhispershow] = useState(true);
  const [load, setLoad] = useState(false);

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
    setDataSource([
      ...data,
      {
        id: 5,
        postContent: "Hey, what's your best class?",
        date: "10 Nov 2023, 12:00 AM",
        liked: true,
        sensitive: true,
      },
    ]);
    if (dataSource.length > 5) {
      setDataSource(dataSource.slice(0, 4));
    }
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return load ? (
    <Loader />
  ) : (
    <SafeAreaView style={styles.container}>
      <View style={styles.app_bar_container}>
        <Image
          source={require("../../assets/logo-s-solid.png")}
          style={styles.logo_s_solid}
        />
      </View>
      <View style={styles.whisper_section}>
        <Text style={[{ fontFamily: fonts.regular }, styles.heading]}>
          Comments on whisper:
        </Text>
        <Text style={[{ fontFamily: fonts.regular }, styles.whisper_text]}>
          {"\n"}
          {whisper}
        </Text>
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
          <PostView
            data={item}
            fonts={fonts}
            navigation={navigation}
            isComment={true}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
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
  flatlist: {
    width: "100%",
    height: "100%",
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
    color: "#000",
  },
});
