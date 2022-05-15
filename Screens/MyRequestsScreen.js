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
} from "react-native";
import CustomHeader from "../components/CustomerHeader";
import RequestsItem from "../components/RequestsItem";
import Worker_RequestItem from "../components/Worker_RequestItem";

class MyRequestsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      data: [],
      workerFirstName: "",
      workerLastName: "",
    };
  }

  goRefresh() {
    this.focusListener = this.props.navigation.addListener("focus", () => {
      this.componentMount();
    });
  }

  componentMount() {
    fetch("http://" + global.IPaddress + ":3000/request/" + global.userID, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoaded: false,
          data: responseJson,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }

  render() {
    let { data } = this.state;

    return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <CustomHeader title="My Requests" />
        {this.goRefresh()}
        {this.state.isLoaded ? this.componentMount() : null}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 15, marginLeft: 50, marginBottom: 30 }}>
            Below are the list of requests
          </Text>

          <View
            style={{
              flex: 1,
              height: "100%",
              marginTop: 0,
            }}
          >
            <FlatList
              ListFooterComponent={<View style={{ height: 60 }} />}
              keyExtractor={(item) => item._id}
              data={data}
              renderItem={({ item }) => (
                <View style={{ flex: 1, paddingHorizontal: 30 }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "lightgray",
                      width: "100%",
                      marginBottom: 20,
                      borderRadius: 8,
                    }}
                  >
                    {/* Top */}
                    <View style={{ flexDirection: "row" }}>
                      {/* Image */}
                      <View style={{ padding: 13 }}>
                        <Image
                          source={require("../assets/bg.png")}
                          style={{ width: 80, height: 80, borderRadius: 40 }}
                        />
                      </View>
                      {/* Request Detail Block */}
                      <View
                        style={{ paddingVertical: 18, paddingHorizontal: 8 }}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            // marginBottom: 3,
                          }}
                        >
                          {item.serviceCategory}
                        </Text>
                        <Text style={{ fontSize: 13 }}>{item.location}</Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            marginVertical: 8,
                          }}
                        >
                          {item.schedule}, {item.time}
                        </Text>
                        <Text style={{ fontSize: 12 }}>{item.time}</Text>
                        <Text style={{ fontSize: 12 }}>
                          Price Range: P 300 - P 1000
                        </Text>
                      </View>
                    </View>
                    {/* Bottom | Status */}
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 12,
                        borderTopWidth: 1,
                        borderColor: "darkgray",
                        // marginTop: 5,
                      }}
                    >
                      <Text>Pending</Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default MyRequestsScreen;

{
  /* <RequestsItem
            id={123}
            service={data.data.serviceCategory}
            category={"Cleaning"}
            date={(data.data.schedule, data.data.time)}
            worker={"Juan Cruz"}
            priceRange="P1100 - P2600"
            navigation={navigation}
          /> */
}
