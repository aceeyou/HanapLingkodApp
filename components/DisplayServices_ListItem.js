import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

import "../global/Global";

function DisplayServices_ListItem(props) {
  //   const [serviceName, setServiceName] = useState("");
  //   const [serviceCategory, setCategory] = useState("");
  //   const [servicePriceRange, setPriceRange] = useState("");
  //   const [serviceWorkTime, setWorkTime] = useState("");
  //   const [image, setImage] = useState("");

  // DATA
  return (
    <TouchableOpacity
      style={styles.btn_container}
      onPress={() => {
        global.selectedWorkSubCat = "";
        global.selectedWorkSubCat = props.title;
        props.navigation.navigate("ListOfWorkers", {
          title: props.title,
          category: props.category,
        });
      }}
    >
      <View style={styles.image_container}>
        <Image source={props.image} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.category}>{props.category}</Text>
        <Text style={styles.sub_info}>{props.priceRange}</Text>
        <Text style={styles.sub_info}>Avg. work time is {props.avgWT}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn_container: {
    width: "100%",
    height: 110,
    flexDirection: "row",
    backgroundColor: "#DDDCDC",
    borderRadius: 6,
    marginTop: 15,
  },
  image_container: {
    width: 110,
    height: "100%",
    borderRadius: 6,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  text_container: {
    width: "100%",
    height: "100%",
    paddingVertical: 15,
    paddingHorizontal: 18,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  category: {
    fontSize: 13,
    marginBottom: 8,
  },
  sub_info: {
    fontSize: 13,
    color: "#6e6d6b",
  },
});

export default DisplayServices_ListItem;
