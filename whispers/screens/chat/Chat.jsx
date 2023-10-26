import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

import { fonts } from "../../Contexts";

const demo_chats = [
  {
    message: "Hey, what's your favorite study spot on campus?",
    date: "10 Nov 2023, 12:00 AM",
    isSelf: false,
  },
  {
    message: "I like the library. How about you?",
    date: "11 Nov 2023, 1:30 PM",
    isSelf: true,
  },
  {
    message: "I prefer the quiet corner in the student center.",
    date: "12 Nov 2023, 3:45 PM",
    isSelf: false,
  },
  {
    message: "The park outside is nice too. Fresh air and greenery!",
    date: "13 Nov 2023, 10:15 AM",
    isSelf: true,
  },
  {
    message: "I haven't explored much yet. Any other good spots?",
    date: "14 Nov 2023, 9:20 AM",
    isSelf: false,
  },
  {
    message: "You should check out the rooftop garden. It's lovely!",
    date: "15 Nov 2023, 4:55 PM",
    isSelf: true,
  },
  {
    message: "Thanks for the suggestion. I'll visit it soon.",
    date: "16 Nov 2023, 8:10 AM",
    isSelf: false,
  },
  {
    message: "The cafe near the science building is cozy for studying.",
    date: "17 Nov 2023, 2:40 PM",
    isSelf: true,
  },
  {
    message: "I love that cafe too! Their coffee is amazing.",
    date: "18 Nov 2023, 11:25 AM",
    isSelf: false,
  },
  {
    message: "I'll check it out. Thanks!",
    date: "19 Nov 2023, 6:30 PM",
    isSelf: true,
  },
];

const ChatBubble = ({ message, date, isSelf }) => {
  return message.length > 0 ? (
    <View
      style={[
        styles.chat_bubble_container,
        isSelf
          ? styles.chat_bubble_container_self
          : styles.chat_bubble_container_other,
      ]}
    >
      <Text
        style={[
          { fontFamily: fonts.regular },
          styles.chat_bubble_text,
          isSelf ? styles.chat_bubble_text_self : {},
        ]}
      >
        {message}
      </Text>
      <Text style={[{ fontFamily: fonts.regular }, styles.chat_bubble_date]}>
        {date}
      </Text>
    </View>
  ) : (
    <View style={{ height: 16 }}></View>
  );
};

const Chat = ({ route, navigation }) => {
  const [params, setParams] = useState(route?.params);

  useEffect(() => {
    setParams(route?.params);
  }, [route?.params]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chat_bar}>
        <Text style={[{ fontFamily: fonts.semiBold }, styles.chat_title]}>
          {params?.title}
        </Text>
        <Text style={[{ fontFamily: fonts.regular }, styles.chat_sub_title]}>
          {params?.last_message}
        </Text>
      </View>
      <FlatList
        style={styles.chat_list}
        data={[...demo_chats, { message: "", date: "", isSelf: false }]}
        renderItem={({ item }) => (
          <ChatBubble
            message={item?.message}
            date={item?.date}
            isSelf={item?.isSelf}
          />
        )}
        keyExtractor={(item) => item.date}
      />
      <View style={styles.send_container}>
        <TextInput
          style={[styles.input, { fontFamily: fonts.regular }]}
          placeholder="Type your message here"
          placeholderTextColor="rgba(255, 255, 255, .7)"
        />
        <TouchableOpacity style={styles.button_container} onPress={() => {}}>
          <Text style={[{ fontFamily: fonts.medium }, styles.button_text]}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: 78,
  },
  chat_bar: {
    width: "100%",
    backgroundColor: "#000",
    paddingVertical: 24,
    paddingHorizontal: 24,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderBottomColor: "rgba(255, 255, 255, .8)",
    borderBottomWidth: 1,
  },
  chat_title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 8,
  },
  chat_sub_title: {
    fontSize: 16,
    color: "#fff",
  },
  chat_list: {
    width: "100%",
    backgroundColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  chat_bubble_container: {
    width: "87%",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  chat_bubble_container_self: {
    alignSelf: "flex-end",
    backgroundColor: "#D8492B",
  },
  chat_bubble_container_other: {
    alignSelf: "flex-start",
    borderColor: "rgba(255, 255, 255, .8)",
    borderWidth: 1,
    backgroundColor: "#000",
  },
  chat_bubble_text: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
  },
  chat_bubble_text_self: {
    textAlign: "left",
  },
  chat_bubble_date: {
    color: "#fff",
    fontSize: 12,
    textAlign: "right",
  },
  send_container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#000",
    borderTopColor: "rgba(255, 255, 255, .8)",
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomColor: "rgba(255, 255, 255, .8)",
    borderBottomWidth: 1,
    backgroundColor: "#000",
    color: "#fff",
  },
  button_container: {
    width: "20%",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 80,
    backgroundColor: "#D8492B",
  },
  button_text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
