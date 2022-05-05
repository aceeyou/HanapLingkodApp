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

function BookingsItem(props, { navigation }) {
  const viewRequest = ({ passprops }) => {
    alert("hi");
    props.navigation.navigate("RequestDetailScreen");
  };

  const toReview = () => {
    alert("hi");

    // get id of click parent
    // remove
    // render new View
  };
  return (
    <View
      style={{
        backgroundColor: "#dddcdc",
        padding: 20,
        paddingBottom: 0,
        borderRadius: 8,
        marginTop: 15,
      }}
    >
      {/* Top | Name & address of worker */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 13 }}
      >
        <Image
          source={require("../assets/bg.png")}
          style={{ width: 50, height: 50, borderRadius: 25, marginRight: 20 }}
        />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {props.worker}
          </Text>
          <Text style={{ fontSize: 13 }}>{props.address}</Text>
        </View>
      </View>
      {/* More info */}
      <View>
        <Text style={{ fontWeight: "bold" }}>{props.service}</Text>
        <Text style={{ fontSize: 13, marginBottom: 8 }}>{props.category}</Text>
        <Text style={{ color: "#676b69" }}>
          Price Range: {props.priceRange}
        </Text>
        <Text style={{ color: "#676b69", marginBottom: 12 }}>{props.date}</Text>
      </View>
      {true ? (
        <View
          style={{
            paddingVertical: 12,
            borderTopWidth: 1,
            borderTopColor: "#818583",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14 }}>Worker is on the way!</Text>
        </View>
      ) : (
        <View
          style={{
            paddingVertical: 12,
            borderTopWidth: 1,
            borderTopColor: "#818583",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#0ec76e",
              paddingVertical: 8,
              paddingHorizontal: 50,
              borderRadius: 8,
            }}
            onPress={() => toReview()}
          >
            <Text style={{ fontSize: 14, color: "#fff", fontWeight: "bold" }}>
              Worker is here!
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

export default BookingsItem;
