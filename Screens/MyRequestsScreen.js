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
        global.requestCount = this.state.data.length;
        console.log("len: ", this.state.data.length);
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
              extraData={this.state}
              ListFooterComponent={<View style={{ height: 60 }} />}
              keyExtractor={(item) => item._id}
              data={data}
              renderItem={({ item }) => (
                // Recruiter View
                <View style={{ flex: 1, paddingHorizontal: 30 }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "#dddcdc",
                      width: "100%",
                      marginTop: 20,
                      borderRadius: 8,
                      elevation: 6,
                      overflow: "hidden",
                      borderColor: "#1c2541",
                      borderWidth: 1,
                    }}
                  >
                    {global.userRole == "recruiter" ? (
                      <View>
                        {item.status === "3" ? (
                          <View
                            style={{
                              backgroundColor: "#DD2C32",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-around",
                            }}
                          >
                            <View
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                                paddingVertical: 12,
                                // backgroundColor: "red",
                                // marginTop: 5,
                              }}
                            >
                              <Text
                                style={{ color: "#fff", fontWeight: "bold" }}
                              >
                                Service Request Rejected by the Worker
                              </Text>
                            </View>
                            <View>
                              <TouchableOpacity
                                style={{
                                  backgroundColor: "#0b132b",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderRadius: 6,
                                  padding: 5,
                                  paddingRight: 6,
                                }}
                                // onPress={() => {
                                // this.deleteAlert();
                                //   fetch(
                                //   "http://" +
                                //     global.IPaddress +
                                //     ":3000/request/" +
                                //     global.userID +
                                //     "/" +
                                //     item._id,
                                //   {
                                //     method: "DELETE",
                                //     headers: {
                                //       "content-type": "application/json",
                                //     },
                                //   }
                                // )
                                //   .then(() => {
                                //     alert("Service Request has been Deleted.");
                                //   })
                                //   .catch((error) => {
                                //     console.log("Error has occured");
                                //     console.log(error);
                                //   });
                                // this.componentMount();
                                // }}
                                onPress={() => {
                                  Alert.alert(
                                    "Delete Request",
                                    "This request item will not appear again once deleted",
                                    [
                                      {
                                        text: "Cancel",
                                        onPress: () => {
                                          console.log("cancel");
                                        },
                                        style: "cancel",
                                      },
                                      {
                                        text: "OK",
                                        onPress: () => {
                                          fetch(
                                            "http://" +
                                              global.IPaddress +
                                              ":3000/request/" +
                                              global.userID +
                                              "/" +
                                              item._id,
                                            {
                                              method: "DELETE",
                                              headers: {
                                                "content-type":
                                                  "application/json",
                                              },
                                            }
                                          )
                                            .then(() => {
                                              alert(
                                                "Service Request has been Deleted."
                                              );
                                            })
                                            .catch((error) => {
                                              console.log("Error has occured");
                                              console.log(error);
                                            });
                                          this.componentMount();
                                        },
                                      },
                                    ]
                                  );
                                  this.componentMount();
                                }}
                              >
                                <Image
                                  source={require("../assets/icons/trash-white.png")}
                                  style={{ width: 18, height: 18 }}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                        ) : null}
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ padding: 13 }}>
                            <Image
                              source={require("../assets/bg.png")}
                              style={{
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                              }}
                            />
                          </View>

                          <View
                            style={{
                              paddingVertical: 18,
                              paddingHorizontal: 8,
                            }}
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
                            <Text style={{ fontSize: 13 }}>
                              Where: {item.location}
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: "bold",
                                marginVertical: 8,
                              }}
                            >
                              {item.schedule}, {item.time}
                            </Text>
                            <Text style={{ fontSize: 12 }}>
                              Rating of worker
                            </Text>
                            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                              Worker: {item.workerId.firstname}{" "}
                              {item.workerId.lastname}
                            </Text>
                          </View>
                        </View>

                        {item.status === "3" ? null : (
                          <View
                            style={{
                              alignItems: "center",
                              justifyContent: "center",
                              paddingVertical: 12,
                              borderTopWidth: 1,
                              borderColor: "#1c2541",
                              // marginTop: 5,
                            }}
                          >
                            <Text>Pending</Text>
                          </View>
                        )}
                      </View>
                    ) : (
                      // Worker View
                      <View>
                        <View style={{ flexDirection: "row" }}>
                          <View style={{ padding: 13, paddingLeft: 30 }}>
                            <Image
                              source={require("../assets/bg.png")}
                              style={{
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                              }}
                            />
                          </View>

                          <View
                            style={{
                              paddingVertical: 18,
                              paddingHorizontal: 8,
                              marginTop: 5,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                // marginBottom: 3,
                              }}
                            >
                              {item.recuiterId.firstname}{" "}
                              {item.recuiterId.lastname}
                            </Text>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <Text>Recruiter</Text>
                              <Image
                                style={{ width: 15, height: 15, marginLeft: 3 }}
                                source={require("../assets/icons/verified-green.png")}
                              />
                            </View>
                          </View>
                        </View>

                        <View
                          style={{
                            marginBottom: 0,
                            paddingHorizontal: 30,
                          }}
                        >
                          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            {item.serviceCategory}
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: "bold",
                              // marginVertical: 8,
                              marginBottom: 10,
                            }}
                          >
                            {item.schedule}, {item.time}
                          </Text>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              style={{ width: 15, height: 15, marginRight: 3 }}
                              source={require("../assets/icons/location.png")}
                            />
                            <Text
                              style={{ fontSize: 16, fontWeight: "bold" }}
                              numberOfLines={2}
                            >
                              {item.location}
                            </Text>
                          </View>
                          {/* <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                            Recruiter: {item.recuiterId.firstname}{" "}
                            {item.recuiterId.lastname}
                          </Text> */}
                        </View>

                        {item.status === "3" ? (
                          <View
                            style={{
                              alignItems: "center",
                              justifyContent: "space-around",
                              flexDirection: "row",
                              paddingVertical: 20,
                              paddingHorizontal: 30,
                              borderColor: "darkgray",
                              // marginTop: 5,
                            }}
                          >
                            <Text
                              style={{
                                backgroundColor: "red",
                                paddingHorizontal: 30,
                                paddingVertical: 8,
                                color: "#fff",
                              }}
                            >
                              Service Request Rejected
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={{
                              alignItems: "center",
                              justifyContent: "space-around",
                              flexDirection: "row",
                              paddingVertical: 20,
                              paddingHorizontal: 30,
                              borderColor: "darkgray",
                              // marginTop: 5,
                            }}
                          >
                            <TouchableOpacity
                              style={[styles.btns, styles.btnAccept]}
                              onPress={() => {
                                // console.log(item._id);
                                fetch(
                                  "http://" +
                                    global.IPaddress +
                                    ":3000/request/" +
                                    global.userID +
                                    "/" +
                                    item._id,
                                  {
                                    method: "PUT",
                                    body: JSON.stringify({
                                      location: item.location,
                                      schedule: item.schedule,
                                      time: item.time,
                                      status: "2",
                                    }),
                                    headers: {
                                      "content-type": "application/json",
                                    },
                                  }
                                )
                                  .then(() => {
                                    alert("Service Request has been Accept.");
                                  })
                                  .catch((error) => {
                                    console.log("Error has occured");
                                    console.log(error);
                                  });
                                this.componentMount;
                              }}
                            >
                              <Text style={styles.btnTxt}>Accept</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={[styles.btns, styles.btnReject]}
                              onPress={() => {
                                fetch(
                                  "http://" +
                                    global.IPaddress +
                                    ":3000/request/" +
                                    global.userID +
                                    "/" +
                                    item._id,
                                  {
                                    method: "PUT",
                                    body: JSON.stringify({
                                      location: item.location,
                                      schedule: item.schedule,
                                      time: item.time,
                                      status: "3",
                                    }),
                                    headers: {
                                      "content-type": "application/json",
                                    },
                                  }
                                )
                                  .then(() => {
                                    alert("Service Request has been Rejected.");
                                  })
                                  .catch((error) => {
                                    console.log("Error has occured");
                                    console.log(error);
                                  });
                                this.componentMount();
                              }}
                            >
                              <Text style={styles.btnTxt}>Reject</Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      </View>
                    )}
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

const styles = StyleSheet.create({
  btns: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingHorizontal: 40,
    paddingVertical: 7,
    borderRadius: 6,
  },
  btnAccept: {
    backgroundColor: "#0AA954",
    marginRight: 10,
  },
  btnReject: {
    backgroundColor: "#D62F35",
  },
  btnTxt: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
});

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
