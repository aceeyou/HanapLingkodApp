import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import CustomHeader from "../components/CustomerHeader";

// fetch data here
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    image: "../assets/bg.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-1455ssdsa71e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571asdasde29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-asdasda",
    title: "Third Item",
  },
];

const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image source={image} style={styles.img} />
  </View>
);

export default function CompletedTasksScreen() {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Completed Tasks" />
      <Text style={styles.txtheader}>
        Below are the list of completed tasks
      </Text>
      <FlatList
        style={styles.flatlistContainer}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  txtheader: {
    paddingVertical: 40,
    paddingHorizontal: 50,
    fontSize: 18,
  },
  item: {
    backgroundColor: "#DDDCDC",
    height: 145,
    width: "100%",
    borderRadius: 6,
    marginBottom: 15,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  title: {},
  img: {
    width: "100%",
    height: "100%",
    backgroundColor: "pink",
  },
  flatlistContainer: {
    paddingHorizontal: 30,
    paddingTop: 10,
    marginBottom: 50,
    paddingBottom: 50,
  },
});
