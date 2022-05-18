import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  FlatList,
} from "react-native";

import "../global/Global";
import CustomHeader from "../components/CustomerHeader";

export default class CommentsProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      dd: {},
    };
  }

  goRefresh() {
    this.focusListener = this.props.navigation.addListener("focus", () => {
      this.componentMount();
    });
  }

  componentMount() {
    let route;
    if (global.userRole === "recruiter") {
      route = "recuiter";
    } else route = "worker";

    console.log("route: ", route);
    console.log(global.userID);

    fetch(
      "http://" + global.IPaddress + ":3000/worker/" + global.selectedWorker,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoaded: false,
          dd: data.comments,
        });
        console.log(this.state.dd);
      })
      .catch((error) => {
        console.log(error);
        // return;
      });
  }

  renderComment(item) {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }

  render() {
    let { dd } = this.state;
    // this.componentMount();
    return (
      <SafeAreaView style={{ marginTop: StatusBar.currentHeight, flex: 1 }}>
        {this.goRefresh()}
        {this.state.isLoaded ? this.componentMount() : null}
        <CustomHeader title="Comments & Reviews" isCreateAccount={true} />

        <View style={{ flex: 1 }}>
          <Text
            style={{
              marginLeft: 30,
              fontSize: 16,
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            From Oldest to Recent
          </Text>

          <FlatList
            style={{ flex: 1 }}
            data={dd}
            extraData={dd}
            ListFooterComponent={<View style={{ height: 60 }} />}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#fff",
                  marginTop: 15,
                  marginHorizontal: 30,
                  padding: 8,
                  borderRadius: 6,
                  elevation: 6,
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#000",
                    borderRadius: 5,
                    padding: 8,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 5,
                    }}
                  >
                    <Image
                      source={require("../assets/bg.png")}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        marginRight: 10,
                      }}
                    />
                    <View
                      style={{ flexDirection: "row", alignItems: "baseline" }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          marginRight: 5,
                        }}
                      >
                        {item.reviewer.firstname} {item.reviewer.lastname}
                      </Text>
                      <Text> said</Text>
                    </View>
                  </View>

                  <Text
                    numberOfLines={3}
                    style={{ marginLeft: 40, fontSize: 16, paddingBottom: 10 }}
                  >
                    {item.content}
                  </Text>
                </View>
              </View>
            )}
          />

          <Text>{dd.firstname}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 30,
  },
  imgContainer: {
    alignItems: "center",
    paddingTop: 10,
    marginBottom: 20,
  },
  infoContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: "#dddcdc",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  nameBlock: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  usersName: {
    paddingBottom: 3,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 3,
  },
  verifyIcon: {
    width: 18,
    height: 18,
    marginLeft: 5,
  },
  usersService: {
    color: "#646466",
  },
  overviewContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  containerCard: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 60,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#1e1f21",
  },
  ovRating: {
    flex: 1,
    alignItems: "center",
  },
  ovRatingTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  ovRatingBottom: {},
  ovCompleted: {
    flex: 2.2,
    alignItems: "center",
  },
  ovReviews: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  txtTop: {
    fontSize: 17,
    fontWeight: "bold",
  },
  txtBottom: {
    fontSize: 12,
  },
  viewRow: {
    marginBottom: 20,
  },
  infolabel: {
    fontSize: 13,
    marginBottom: 2,
    color: "#757678",
  },
  infoDetail: {
    fontSize: 18,
    fontWeight: "bold",
    // marginLeft: 10,
  },
  logoutBtnCtn: {
    alignItems: "center",
    marginTop: 40,
  },
  logoutBtn: {
    backgroundColor: "#1e1f21",
    paddingHorizontal: 100,
    paddingVertical: 12,
    borderRadius: 6,
    elevation: 6,
    shadowColor: "black",
  },
  logoutTxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
