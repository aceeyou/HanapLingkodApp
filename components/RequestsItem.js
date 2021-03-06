import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  StyleSheet,
} from "react-native";

function RequestsItem(props, { navigation }) {
  const viewRequest = ({ passprops }) => {
    alert("hi");
    props.navigation.navigate("RequestDetailScreen");
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        viewRequest({ ...props });
      }}
    >
      <View style={{ flex: 1, flexDirection: "row", paddingVertical: 5 }}>
        <View
          style={{
            flex: 0.8,
            padding: 8,
            height: 120,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/bg2.png")}
            resizeMode="cover"
            style={{ width: 70, height: 70, borderRadius: 150 }}
          />
        </View>
        <View style={{ flex: 2, paddingVertical: 10, paddingLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {props.service}
          </Text>
          <Text style={{ fontSize: 13 }}>{props.category}</Text>
          <Text
            style={{ fontSize: 14, fontWeight: "bold", paddingVertical: 8 }}
          >
            {props.date}
          </Text>
          <Text style={{ fontSize: 13 }}>{props.worker}</Text>
          <Text style={{ fontSize: 13, color: "#4a4947" }}>
            Price Range: {props.priceRange}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          borderTopWidth: 1,
          borderTopColor: "#cfcdca",
          alignItems: "center",
          justifyContent: "flex-end",
          height: 35,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            {/*  */}
            {/* {props.isAccepted} */}
            Pending
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#DDDCDC",
    padding: 5,
    borderRadius: 6,
    marginBottom: 16,
  },
});

export default RequestsItem;
