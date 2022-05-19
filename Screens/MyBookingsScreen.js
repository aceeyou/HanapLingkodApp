import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
  StyleSheet,
  Alert,
  TextInput,
} from "react-native";
import BookingsItem from "../components/BookingsItem";
import CustomHeader from "../components/CustomerHeader";
import RequestsItem from "../components/RequestsItem";
import StarRating from "react-native-star-rating-widget";
import StarRatingComponent from "../components/StarRatingComponent";

class MyBookingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      data: [],
      comment: "",
      rating: 0,
    };
  }

  // updateRating(r) {
  //   this.state = { rating: r };
  //   console.log(this.state.rating);
  // }

  goRefresh() {
    this.focusListener = this.props.navigation.addListener("focus", () => {
      this.componentMount();
    });
  }

  componentMount() {
    fetch("http://" + global.IPaddress + ":3000/book/" + global.userID, {
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
        // global.bookingCount = this.state.data.length;
        // console.log("len: ", this.state.data.length);
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }

  updateOTW(itemID) {}

  render() {
    let { data } = this.state;
    let ratingData = 0;

    return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        {this.goRefresh()}
        {this.state.isLoaded ? this.componentMount() : null}
        {/* <CustomHeader title="My Bookings" /> */}
        <View style={{ flex: 1, marginHorizontal: 0 }}>
          {/* <Text
            style={{
              marginTop: 30,
              marginLeft: 50,
              marginBottom: 10,
              fontSize: 16,
            }}
          >
            Below are the list of bookings
          </Text> */}

          <FlatList
            ListHeaderComponent={
              <View>
                <CustomHeader title="My Bookings" />

                <Text
                  style={{
                    marginTop: 30,
                    marginLeft: 50,
                    marginBottom: 10,
                    fontSize: 16,
                  }}
                >
                  Below are the list of bookings
                </Text>
              </View>
            }
            extraData={data}
            ListFooterComponent={<View style={{ height: 60 }} />}
            keyExtractor={(item) => item._id}
            data={data}
            renderItem={({ item }) => (
              <View
              // style={{
              //   paddingBottom: 25,

              //   marginHorizontal: 30,
              //   backgroundColor: "#dddcdc",
              //   marginTop: 15,
              //   borderRadius: 6,
              //   elevation: 6,
              //   borderColor: "#1c2541",
              //   borderWidth: 1,
              //   overflow: "hidden",
              // }}
              >
                {item.status === "3" ? null : (
                  <View
                    style={{
                      paddingBottom: 25,

                      marginHorizontal: 30,
                      backgroundColor: "#dddcdc",
                      marginTop: 15,
                      borderRadius: 6,
                      elevation: 6,
                      borderColor: "#1c2541",
                      borderWidth: 1,
                      overflow: "hidden",
                    }}
                  >
                    {global.userRole === "recruiter" ? (
                      <View>
                        <View style={{}}>
                          {item.status == "2" ? (
                            <View
                              style={{
                                backgroundColor: "#2080ff",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingVertical: 10,
                              }}
                            >
                              <Text style={[styles.txtWhite]}>
                                Worker is on the way!
                              </Text>
                            </View>
                          ) : (
                            <View
                              style={{
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#1c2541",
                                paddingVertical: 10,
                              }}
                            >
                              <Text style={[styles.txtWhite]}>
                                Worker accepted your request!
                              </Text>
                            </View>
                          )}
                        </View>
                      </View>
                    ) : null}
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: "row",
                        padding: 15,
                        paddingBottom: 0,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "#5bc0be",
                          borderRadius: 30,
                          width: 60,
                          height: 60,
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          source={require("../assets/bg.png")}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 30,
                          }}
                        />
                      </View>
                      {global.userRole === "recruiter" ? (
                        <View style={[styles.nameBlock]}>
                          <Text style={[styles.txtDark, styles.nameTxt]}>
                            {item.requestId.workerId.firstname}{" "}
                            {item.requestId.workerId.lastname}
                          </Text>
                          <Text style={[styles.txtDark]}>
                            Service: {item.requestId.serviceCategory}
                          </Text>
                        </View>
                      ) : (
                        <View style={[styles.nameBlock]}>
                          <Text style={[styles.txtDark, styles.nameTxt]}>
                            {item.requestId.recuiterId.firstname}{" "}
                            {item.requestId.recuiterId.lastname}
                          </Text>
                          <Text style={[styles.txtDark]}>
                            Service: {item.requestId.serviceCategory}
                          </Text>
                        </View>
                      )}
                    </View>
                    <View style={{ paddingHorizontal: 25, marginTop: 7 }}>
                      <Text>{item.requestId.recuiterId.lastname}</Text>
                      <View style={{ marginBottom: 10 }}>
                        <Text style={[styles.txtDark]}>Recruiter address:</Text>
                        <Text
                          numberOfLines={3}
                          style={[styles.txtDark, styles.nameTxt]}
                        >
                          {item.requestId.location}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginTop: 10,
                        paddingHorizontal: 25,
                        justifyContent: "flex-start",
                        flexDirection: "row",
                      }}
                    >
                      <View style={{ marginBottom: 0 }}>
                        <Text style={{ marginBottom: 7 }}>Date and Time: </Text>
                        <Text style={[styles.txtDark, styles.schedTxt]}>
                          {item.requestId.schedule}, {item.requestId.time}
                        </Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text></Text>
                      </View>
                    </View>

                    {global.userRole === "recruiter" ? null : (
                      <View
                        style={{
                          flex: 1,
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 20,
                          paddingHorizontal: 20,
                        }}
                      >
                        {item.status === "2" ? null : (
                          <TouchableOpacity
                            style={{
                              width: "100%",
                              backgroundColor: "#1c2541",
                              // paddingHorizontal: 80,
                              paddingVertical: 12,
                              borderRadius: 6,
                              alignItems: "center",
                            }}
                            onPress={() => {
                              // this.updateOTW(item._id);
                              fetch(
                                "http://" +
                                  global.IPaddress +
                                  ":3000/book/" +
                                  global.userID +
                                  "/" +
                                  item._id,
                                {
                                  method: "PUT",
                                  body: JSON.stringify({
                                    status: "2",
                                  }),
                                  headers: {
                                    "content-type": "application/json",
                                  },
                                }
                              )
                                .then(() => {
                                  alert("worker is on the way");
                                  this.componentMount();
                                })
                                .catch((error) => {
                                  alert("error");
                                  console.log(error);
                                  return;
                                });
                              this.componentMount();
                            }}
                          >
                            <Text style={[styles.txtWhite]}>On my way!</Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    )}
                    {item.status === "2" ? (
                      <View
                        style={{
                          marginTop: 20,
                          marginBottom: 10,
                          paddingHorizontal: 70,
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            alignItems: "center",
                            backgroundColor: "#1c2541",
                            paddingVertical: 8,
                            borderRadius: 6,
                          }}
                          onPress={() => {
                            Alert.alert("One Time Password", item.OTP, [
                              {
                                text: "OK",
                                onPress: () => {
                                  console.log("OK");
                                },
                              },
                            ]);
                          }}
                        >
                          <Text style={[styles.txtWhite]}>Show OTP</Text>
                        </TouchableOpacity>
                      </View>
                    ) : null}
                    {item.status === "2" ? (
                      <View>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 20,
                          }}
                        >
                          <StarRatingComponent
                            getR={(r) => {
                              ratingData = r.toString();
                              // console.log(ratingData);
                            }}
                          />
                        </View>
                        <View style={{ paddingHorizontal: 20 }}>
                          <View
                            style={{
                              marginTop: 20,
                              backgroundColor: "#fff",
                              padding: 5,
                              borderRadius: 6,
                              elevation: 3,
                            }}
                          >
                            <Text
                              style={{
                                marginVertical: 10,
                                marginLeft: 15,
                                fontSize: 14,
                              }}
                            >
                              Comment/Review
                            </Text>
                            <View
                              sytle={{
                                flex: 1,
                                borderWidth: 1,
                                borderColor: "#1c2541",
                                // borderRadius: 6,
                                padding: 10,
                                elevation: 5,
                              }}
                            >
                              <TextInput
                                style={{
                                  // height: 110,
                                  marginHorizontal: 10,
                                  borderWidth: 1,
                                  padding: 10,
                                  marginBottom: 10,
                                  textAlignVertical: "top",
                                  borderRadius: 6,
                                }}
                                multiline={true}
                                onChangeText={(text) => {
                                  this.setState({ comment: text });
                                }}
                                placeholder="Write your feedback"
                              />
                            </View>
                          </View>
                          <View
                            style={{
                              backgroundColor: "#298965",
                              marginTop: 15,
                              borderRadius: 6,
                              paddingVertical: 10,
                              alignItems: "center",
                              elevation: 4,
                            }}
                          >
                            <TouchableOpacity
                              style={{ width: "100%", alignItems: "center" }}
                              onPress={() => {
                                console.log("clicked");
                                if (global.userRole == "recruiter") {
                                  fetch(
                                    "http://" +
                                      global.IPaddress +
                                      ":3000/book/" +
                                      global.userID +
                                      "/" +
                                      item._id,
                                    {
                                      method: "PUT",
                                      body: JSON.stringify({
                                        rConfirm: "2",
                                      }),
                                      headers: {
                                        "content-type": "application/json",
                                      },
                                    }
                                  )
                                    .then(() => {
                                      alert("Recruiter: Service finished.");

                                      if (this.state.comment) {
                                        fetch(
                                          "http://" +
                                            global.IPaddress +
                                            ":3000/review/" +
                                            global.userID +
                                            "/" +
                                            item.requestId.workerId._id,
                                          {
                                            method: "POST",
                                            body: JSON.stringify({
                                              stars: ratingData,
                                              content: this.state.comment,
                                            }),
                                            headers: {
                                              "content-type":
                                                "application/json",
                                            },
                                          }
                                        )
                                          .then(() => {
                                            alert(
                                              "Recruiter: Service finished."
                                            );
                                            this.componentMount();
                                          })
                                          .catch((error) => {
                                            console.log(
                                              "rec review: Error has occured"
                                            );
                                            console.log(error);
                                          });
                                      }
                                    })
                                    .catch((error) => {
                                      console.log(
                                        "Recruiter: Error has occured"
                                      );
                                      console.log(error);
                                    });
                                  this.componentMount();
                                } else {
                                  fetch(
                                    "http://" +
                                      global.IPaddress +
                                      ":3000/book/" +
                                      global.userID +
                                      "/" +
                                      item._id,
                                    {
                                      method: "PUT",
                                      body: JSON.stringify({
                                        wConfirm: "2",
                                      }),
                                      headers: {
                                        "content-type": "application/json",
                                      },
                                    }
                                  )
                                    .then(() => {
                                      // alert("Worker: Service finished.");
                                      if (this.state.comment) {
                                        fetch(
                                          "http://" +
                                            global.IPaddress +
                                            ":3000/review/" +
                                            global.userID +
                                            "/" +
                                            item.requestId.recuiterId._id,
                                          {
                                            method: "POST",
                                            body: JSON.stringify({
                                              stars: ratingData,
                                              content: this.state.comment,
                                            }),
                                            headers: {
                                              "content-type":
                                                "application/json",
                                            },
                                          }
                                        )
                                          .then(() => {
                                            alert(
                                              "Recruiter: Service finished."
                                            );
                                            this.componentMount();
                                          })
                                          .catch((error) => {
                                            console.log(
                                              "worker review: Error has occured"
                                            );
                                            console.log(error);
                                          });
                                      }
                                    })
                                    .catch((error) => {
                                      console.log("Worker: Error has occured");
                                      console.log(error);
                                    });
                                  this.componentMount();
                                }
                                this.componentMount();
                              }}
                            >
                              <Text style={[styles.txtWhite]}>
                                Service is done!
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    ) : null}
                  </View>
                )}
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  txtDark: {
    color: "#0b132b",
  },
  txtWhite: {
    color: "#fff",
    fontWeight: "bold",
  },
  nameBlock: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  nameTxt: {
    fontSize: 16,
    fontWeight: "bold",
  },
  schedTxt: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 30,
    textAlign: "left",
    color: "#0b132b",
  },
});

export default MyBookingsScreen;
