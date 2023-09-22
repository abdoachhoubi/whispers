import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

const BlurView = ({ setBlur, fonts }) => {
  return (
    <>
      <View style={styles.blurredView}></View>
      <View style={styles.blur_info_container}>
        <Text style={[styles.blur_info, { fontFamily: fonts.regular }]}>
          This whisper has been hidden due to sensitive content.
        </Text>
        <TouchableOpacity
          style={styles.blur_button}
          onPress={() => setBlur(false)}
        >
          <Text style={[styles.blur_button_text, { fontFamily: fonts.medium }]}>
            Show Whisper
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const WhisperActions = ({ item }) => {
  const likeStroke = require("../assets/heart.png");
  const likeFill = require("../assets/heart-filled.png");
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
          source={require("../assets/comment.png")}
          style={styles.whisper_action_icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.whisper_action}>
        <Image
          source={require("../assets/message.png")}
          style={styles.whisper_action_icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.whisper_action}>
        <Image
          source={require("../assets/report.png")}
          style={styles.whisper_action_icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const PostView = ({ data, fonts, isReply }) => {
  const { index, item } = data;
  const marginTop = {
    marginTop: index == 0 ? 32 : 0,
  };
  const [blur, setBlur] = useState(item.sensitive);
  return (
    <View style={[styles.whisper_container, marginTop]}>
      {blur && <BlurView setBlur={setBlur} fonts={fonts} />}
      <View style={styles.whisper_inner_container}>
        <Text style={[styles.whisper_content, { fontFamily: fonts.regular }]}>
          {item.postContent}
        </Text>
        <Text style={[styles.whisper_date, { fontFamily: fonts.regular }]}>
          {item.date}
        </Text>
        {!isReply && <WhisperActions item={item} />}
      </View>
    </View>
  );
};

export default PostView;

const styles = StyleSheet.create({
  whisper_container: {
    marginHorizontal: 16,
    borderColor: "rgba(255, 255, 255, .8)",
    borderWidth: 1,
    borderRadius: 8,
    position: "relative",
    overflow: "hidden",
    display: "block",
    marginBottom: 32,
	// minimum height of fit-content
	minHeight: 160,
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
  blurredView: {
    width: 1000,
    height: 1000,
    position: "absolute",
    top: "50%",
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
