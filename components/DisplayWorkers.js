import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { render } from "react-dom";

function DisplayWorkers(props, { navigation }) {
  //   const [serviceName, setServiceName] = useState("");
  //   const [serviceCategory, setCategory] = useState("");
  //   const [servicePriceRange, setPriceRange] = useState("");
  //   const [serviceWorkTime, setWorkTime] = useState("");
  //   const [image, setImage] = useState("");

  // DATA
  //   const navigation = useNavigation();

  const renderStars = (rating) => {
    if (rating == 5) {
      return (
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
        </View>
      );
    } else if (rating == 4) {
      return (
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
        </View>
      );
    } else if (rating == 3) {
      return (
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
        </View>
      );
    } else if (rating == 2) {
      return (
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
        </View>
      );
    } else {
      return (
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/icons/star-filled.png")}
            style={{ width: 15, height: 15 }}
          />
        </View>
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.btn_container}
      onPress={() => {
        props.navigation.navigate("RequestFormScreen", {
          title: props.title,
          category: props.category,
          name: props.name,
        });
      }}
    >
      <View style={styles.image_container}>
        <Image source={props.dp} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.nametxt}>{props.name}</Text>
        <Text style={styles.category}>{props.priceRange}</Text>
        <Text style={styles.sub_info}>{props.avgWH}</Text>
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
  nametxt: {
    fontWeight: "bold",
    fontSize: 15,
  },
  category: {
    fontSize: 13,
    marginBottom: 6,
  },
  sub_info: {
    fontSize: 13,
    color: "#6e6d6b",
  },
});

export default DisplayWorkers;
