import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

const CategoryButton = (props) => {
  // const [state, setState] = useState()
  // setState(props.title)
  // const changeState = () => {
  //     setState(props.title)
  // }
  return (
    <TouchableOpacity
      style={styles.itemBox}
      onPress={() => {
        props.navigation.navigate("ServicesScreen", { title: props.title });
      }}
    >
      <Image style={styles.itemImage} source={props.categoryImage} />
      <Text style={styles.itemText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "43%",
    height: 140,
    marginBottom: 30,
    // backgroundColor: '#DDDCDC',
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    overflow: "visible",
  },
  itemImage: {
    width: "30%",
    height: "30%",
    borderRadius: 6,
    marginVertical: 10,
  },
  itemText: {
    fontSize: 14,
  },
});

export default CategoryButton;
