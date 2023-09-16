import {
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useContext } from "react";

// eslint-disable-next-line import/no-cycle
import { FontContext } from "../../App";

const data = [
  {
    id: 1,
    postContent: "Hey, what's your favorite study spot on campus?",
    date: "10 Nov 2023, 12:00 AM",
  },
  {
    id: 2,
    postContent: "Share your favorite book or movie recommendation!",
    date: "10 Nov 2023, 12:00 AM",
  },
  {
    id: 3,
    postContent:
      "Hey there, I've been pondering this question lately: What's the most significant change you'd like to see on our campus? It could be anything, big or small. Share your thoughts and let's spark some positive change together!",
    date: "10 Nov 2023, 12:00 AM",
  },
  {
    id: 4,
    postContent: "Anonymous compliment: You have a great sense of style!",
    date: "10 Nov 2023, 12:00 AM",
  },
];

const ItemView = ({ item }) => {
	const fonts = {
		thin: "IBMPlexMono_100Thin",
		extraLight: "IBMPlexMono_200ExtraLight",
		light: "IBMPlexMono_300Light",
		regular: "IBMPlexMono_400Regular",
		medium: "IBMPlexMono_500Medium",
		semiBold: "IBMPlexMono_600SemiBold",
		bold: "IBMPlexMono_700Bold",
	  };
  return (
    <View style={styles.whisper_container}>
      <Text style={[styles.whisper_content, { fontFamily: fonts.regular }]}>
        {item.postContent}
      </Text>
      <Text style={[styles.whisper_date, { fontFamily: fonts.regular }]}>
        {item.date}
      </Text>
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

const Home = () => {
  const fonts = useContext(FontContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const [dataSource, setDataSource] = React.useState(data);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setDataSource([
      ...data,
      {
        id: 5,
        postContent: "Hey, what's your best class?",
        date: "10 Nov 2023, 12:00 AM",
      },
    ]);
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
        <Text style={[styles.heading, { fontFamily: fonts.bold }]}>Feed</Text>
      </View>
      <ScrollView
	  refreshControl={
		<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
	}>
	  <FlatList
	  		style={styles.flatlist}
			data={dataSource}
			keyExtractor={(item, index) => index.toString()}
			renderItem={ItemView}
			ItemSeparatorComponent={ItemSeparatorView}
      />
	  </ScrollView>
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
  },
  app_bar_container: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
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
    marginRight: 12,
  },
  flatlist: {
	width: "100%",
	height: "100%",
	paddingTop: 24,
	},
  whisper_container: {
    // width: "100%",
	marginHorizontal: 16,
	padding: 24,
	borderColor: "rgba(255, 255, 255, .8)",
	borderWidth: 1,
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
});
