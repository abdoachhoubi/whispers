import {
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";

// eslint-disable-next-line import/no-cycle
import { FontContext } from "../../App";

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

const WhisperActions = ({ item }) => {
  const likeStroke = require("../../assets/heart.png");
  const likeFill = require("../../assets/heart-filled.png");
  const [liked, setLiked] = useState(item.liked);
  return (
    <View style={styles.whisper_actions}>
      <TouchableOpacity
        style={styles.whisper_action}
        onPress={() => setLiked((prev) => !prev)}
      >
        <Image
          source={liked ? likeFill : likeStroke}
          style={styles.whisper_action_icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.whisper_action}>
        <Image
          source={require("../../assets/comment.png")}
          style={styles.whisper_action_icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.whisper_action}>
        <Image
          source={require("../../assets/message.png")}
          style={styles.whisper_action_icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.whisper_action}>
        <Image
          source={require("../../assets/report.png")}
          style={styles.whisper_action_icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const BlurView = ({ setBlur, fonts }) => {
  return (
    <>
      <View style={styles.blurredView}></View>
      <View style={styles.blur_info_container}>
        <Text style={[styles.blur_info, {fontFamily: fonts.regular}]}>
          This whisper has been hidden due to sensitive content.
        </Text>
        <TouchableOpacity
          style={styles.blur_button}
          onPress={() => setBlur(false)}
        >
          <Text style={[styles.blur_button_text, {fontFamily: fonts.medium}]}>Show Whisper</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const ItemView = ({ item, fonts }) => {
  const [blur, setBlur] = useState(item.sensitive);
  return (
    <View style={styles.whisper_container}>
      {blur && <BlurView setBlur={setBlur} fonts={fonts} />}
      <View style={styles.whisper_inner_container}>
	  <Text style={[styles.whisper_content, { fontFamily: fonts.regular }]}>
        {item.postContent}
      </Text>
      <Text style={[styles.whisper_date, { fontFamily: fonts.regular }]}>
        {item.date}
      </Text>
      <WhisperActions item={item} />
	  </View>
    </View>
  );
};

const ItemSeparatorView = () => {
  return (
    <View
      style={{
        height: 24,
        width: "100%",
      }}
    />
  );
};

const BottomNavBar = () => {
  return (
    <View style={styles.bottom_nav_bar_container}>
      <TouchableOpacity style={styles.bottom_nav_bar_item}>
        <Image
          source={require("../../assets/home.png")}
          style={styles.bottom_nav_bar_item_icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottom_nav_bar_item}>
        <Image
          source={require("../../assets/chat.png")}
          style={styles.bottom_nav_bar_item_icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottom_nav_bar_item}>
        <Image
          source={require("../../assets/settings.png")}
          style={styles.bottom_nav_bar_item_icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const Home = () => {
  const fonts = useContext(FontContext);
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.app_bar_container}>
        <Image
          source={require("../../assets/logo-s-solid.png")}
          style={styles.logo_s_solid}
        />
      </View>
      <ScrollView
        onScroll={handleScroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <FlatList
          style={styles.flatlist}
          data={dataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) => <ItemView item={item.item} fonts={fonts} />}
          ItemSeparatorComponent={ItemSeparatorView}
        />
      </ScrollView>
      <BottomNavBar />
      {whispershow && (
        <TouchableOpacity style={styles.whisper_button}>
          <Text style={[{ fontFamily: fonts.medium }, styles.whispers_text]}>
            Add a whisper
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Home;

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
  flatlist: {
    width: "100%",
    height: "100%",
    paddingTop: 24,
    paddingBottom: 88,
  },
  whisper_container: {
    marginHorizontal: 16,
    borderColor: "rgba(255, 255, 255, .8)",
    borderWidth: 1,
    borderRadius: 8,
    position: "relative",
    overflow: "hidden",
  },
  whisper_inner_container: {
	padding: 24,
    borderRadius: 8,
  },
  whisper_content: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 8,
  },
  whisper_date: {
    fontSize: 12,
    textAlign: "right",
    width: "100%",
    marginTop: 16,
    color: "rgba(255, 255, 255, .8)",
  },
  whisper_actions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
  whisper_action: {
    width: 24,
    height: 24,
  },
  whisper_action_icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
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
    backgroundColor: "#B9FF23",
    borderRadius: 100,
    position: "absolute",
    bottom: 80,
    right: 16,
  },
  whispers_text: {
    fontSize: 16,
    color: "#000",
  },
  blurredView: {
    width: 1000,
    height: 1000,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#000",
    zIndex: 1,
  },
  blur_info_container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
  },
  blur_info: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 24,
  },
  blur_button: {
    width: 200,
    height: 48,
    backgroundColor: "#FF0000",
    borderRadius: 100,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  blur_button_text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
