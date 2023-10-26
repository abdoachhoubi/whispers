import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { fonts } from "../../Contexts";

const demo_chats = [
  {
    title: "Anonymous 1",
    last_message: "Hey, what's your favorite study spot on campus?",
    date: "10 Nov 2023, 12:00 AM",
  },
  {
    title: "Anonymous 2",
    last_message: "I like the library. How about you?",
    date: "11 Nov 2023, 1:30 PM",
  },
  {
    title: "Anonymous 3",
    last_message: "I prefer the quiet corner in the student center.",
    date: "12 Nov 2023, 3:45 PM",
  },
  {
    title: "Anonymous 4",
    last_message: "The park outside is nice too. Fresh air and greenery!",
    date: "13 Nov 2023, 10:15 AM",
  },
  {
    title: "Anonymous 5",
    last_message: "I haven't explored much yet. Any other good spots?",
    date: "14 Nov 2023, 9:20 AM",
  },
  {
    title: "Anonymous 6",
    last_message: "You should check out the rooftop garden. It's lovely!",
    date: "15 Nov 2023, 4:55 PM",
  },
  {
    title: "Anonymous 7",
    last_message: "Thanks for the suggestion. I'll visit it soon.",
    date: "16 Nov 2023, 8:10 AM",
  },
  {
    title: "Anonymous 8",
    last_message: "The cafe near the science building is cozy for studying.",
    date: "17 Nov 2023, 2:40 PM",
  },
  {
    title: "Anonymous 9",
    last_message: "I love that cafe too! Their coffee is amazing.",
    date: "18 Nov 2023, 11:25 AM",
  },
  {
    title: "Anonymous 10",
    last_message: "Let's meet up there sometime and study together.",
    date: "19 Nov 2023, 5:30 PM",
  },
  {
    title: "Anonymous 11",
    last_message: "Sounds like a plan! I'm in for it.",
    date: "20 Nov 2023, 7:00 PM",
  },
  {
    title: "Anonymous 12",
    last_message: "Great! See you there next week.",
    date: "21 Nov 2023, 2:15 PM",
  },
];

const MessageListItem = ({ item, navigation }) => {
  return (
    <View style={styles.message_list_container}>
      <TouchableOpacity
        style={styles.message_list_item}
        onPress={() => {
          navigation.navigate("Chat", {
            title: item.title,
            last_message: item.last_message,
          });
        }}
      >
        <Text
          style={[{ fontFamily: fonts.medium }, styles.message_list_item_title]}
        >
          {item.title}
        </Text>
        <Text
          style={[
            { fontFamily: fonts.regular },
            styles.message_list_item_last_message,
          ]}
        >
          {item.last_message}
        </Text>
        <Text
          style={[{ fontFamily: fonts.regular }, styles.message_list_item_date]}
        >
          {item.date}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Messages = ({ width, navigation }) => {
  return (
    <SafeAreaView
      style={[{ width: width }, styles.container]}
      removeClippedSubviews={false}
    >
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
            Messages
          </Text>
        </View>
      </View>
      <View style={styles.info_container}>
        <Text style={[{ fontFamily: fonts.regular }, styles.info_text]}>
          Please note that for some security reasons, every chat will get
          deleted after 48 Hours after it's creation!
        </Text>
      </View>
      <FlatList
        data={demo_chats}
        keyExtractor={(_, index) => index.toString()}
        renderItem={(item) => (
          <MessageListItem item={item.item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#000",
    display: "flex",
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
  info_container: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomColor: "rgba(255, 255, 255, .8)",
    borderBottomWidth: 1,
  },
  info_text: {
    color: "#fff",
    fontSize: 16,
  },
  message_list_container: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  message_list_item: {
    padding: 16,
    borderColor: "rgba(255, 255, 255, .8)",
    borderWidth: 1,
    borderRadius: 8,
  },
  message_list_item_title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
  },
  message_list_item_last_message: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 8,
  },
  message_list_item_date: {
    color: "#fff",
    fontSize: 12,
    textAlign: "right",
  },
});
