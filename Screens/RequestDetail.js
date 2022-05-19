import React, { Component, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import CustomHeader from "../components/CustomerHeader";

export default class RequestDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      data: {},
      firstname: "",
      lastname: "",
    };
  }

  goRefresh() {
    this.focusListener = this.props.navigation.addListener("focus", () => {
      this.componentMount();
    });
  }

  componentMount() {
    fetch(
      "http://" +
        global.IPaddress +
        ":3000/request/" +
        global.userID +
        "/" +
        global.requestID,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        // this.updateData(responseJson);
        this.setState({
          isLoaded: false,
          data: responseJson,
          firstname: responseJson.workerId.firstname,
          lastname: responseJson.workerId.lastname,
        });
        console.log(responseJson.workerId.firstname);
        console.log(responseJson.workerId.lastname);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }

  updateData(newData) {
    this.setState({
      isLoaded: false,
      data: [...this.state.data, ...newData],
    });
  }

  render() {
    let { data } = this.state;

    return (
      <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
        <ScrollView>
          {this.state.isLoaded ? this.componentMount() : null}
          <CustomHeader title="Request Detail" isCreateAccount={true} />
          <View style={{ flex: 1, paddingHorizontal: 30, paddingVertical: 30 }}>
            <Text style={{ fontSize: 16, marginBottom: 20, marginLeft: 20 }}>
              Request Summary
            </Text>
            <View
              style={{
                width: "85%",
                paddingVertical: 20,
                paddingHorizontal: 30,
                backgroundColor: "lightgray",
                elevation: 6,
              }}
            >
              <Text style={{ fontSize: 15 }}>Service Requested</Text>

              <Text style={{ fontSize: 18, marginTop: 10 }}>
                {data.serviceCategory}
              </Text>
              <Text style={{ fontSize: 13 }}>
                {data.status === "1"
                  ? "Pending Request"
                  : "Check Your My Bookings Page"}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Image
                  source={{
                    uri: "https://img.icons8.com/ios-glyphs/30/000000/calendar.png",
                  }}
                  style={{ width: 23, height: 23, marginRight: 8 }}
                />
                <Text
                  style={{ fontSize: 15, fontWeight: "bold" }}
                >{`${data.schedule}, ${data.time}`}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 6,
                }}
              >
                <Image
                  source={{
                    uri: "https://img.icons8.com/ios-filled/50/000000/marker.png",
                  }}
                  style={{ width: 22, height: 22, marginRight: 8 }}
                />
                <Text
                  style={{ fontSize: 15, fontWeight: "bold" }}
                  numberOfLines={3}
                >
                  {data.location}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 6,
                }}
              >
                <Image
                  source={{
                    uri: "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png",
                  }}
                  style={{ width: 22, height: 22, marginRight: 8 }}
                />
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {this.state.firstname} {this.state.lastname}
                </Text>
              </View>

              <View style={{ marginTop: 30 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0b132b",
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderRadius: 6,
                  }}
                  onPress={() => {
                    global.selectedWorker = data.workerId._id;
                    this.props.navigation.navigate("WorkerProfilePage");
                    console.log(global.selectedWorker);
                  }}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    View Worker Profile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
