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

class MyBookingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      data: [],
      comment: "",
    };
  }

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
        global.bookingCount = this.state.data.length;
        console.log("len: ", this.state.data.length);
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }

  updateOTW(itemID) {
    fetch(
      "http://" +
        global.IPaddress +
        ":3000/book/" +
        global.userID +
        "/" +
        itemID,
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
      })
      .catch((error) => {
        alert("error");
        console.log(error);
        return;
      });
    this.componentMount();
  }

  render() {
    let { data } = this.state;

    return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        {this.goRefresh()}
        {this.state.isLoaded ? this.componentMount() : null}
        <CustomHeader title="My Bookings" />
        <View style={{ flex: 1, marginHorizontal: 0 }}>
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

          <FlatList
            extraData={data}
            ListFooterComponent={<View style={{ height: 60 }} />}
            keyExtractor={(item) => item._id}
            data={data}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 10,
                  marginHorizontal: 30,
                  backgroundColor: "#dddcdc",
                  marginTop: 15,
                  borderRadius: 6,
                  elevation: 6,
                  borderColor: "#1c2541",
                  borderWidth: 1,
                }}
              >
                <View style={{ marginBottom: 10, flexDirection: "row" }}>
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
                <View style={{ paddingHorizontal: 10, marginTop: 7 }}>
                  <View style={{ marginBottom: 0 }}>
                    <Text style={[styles.txtDark]}>Recruiter address:</Text>
                    <Text style={[styles.txtDark, styles.nameTxt]}>
                      {item.requestId.location}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 20,
                    paddingHorizontal: 10,
                    justifyContent: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <Text style={{ marginBottom: 7 }}>Schedule: </Text>
                    <Text style={[styles.txtDark, styles.schedTxt]}>
                      {item.requestId.schedule}, {item.requestId.time}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text></Text>
                  </View>
                </View>

                {global.userRole === "recruiter" ? (
                  <View style={{}}>
                    {item.status == "2" ? (
                      <View
                        style={{
                          backgroundColor: "#2080ff",
                          alignItems: "center",
                          justifyContent: "center",
                          paddingVertical: 7,
                          borderRadius: 6,
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
                          paddingVertical: 7,
                          borderRadius: 6,
                        }}
                      >
                        <Text style={[styles.txtWhite]}>
                          Worker accepted your request!
                        </Text>
                      </View>
                    )}
                  </View>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 10,
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
                          this.updateOTW(item._id);
                        }}
                      >
                        <Text style={[styles.txtWhite]}>On my way!</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
                {item.status === "2" ? (
                  <View>
                    <View
                      style={{
                        marginTop: 20,
                        backgroundColor: "#fff",
                        padding: 10,
                        borderRadius: 6,
                      }}
                    >
                      <Text
                        style={{
                          marginVertical: 10,
                          marginLeft: 15,
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        Comment/Review
                      </Text>
                      <View
                        sytle={{
                          flex: 1,
                          borderWidth: 1,
                          borderColor: "#0b132b",
                          // borderRadius: 6,
                          padding: 10,
                        }}
                      >
                        <TextInput
                          style={{
                            height: 110,
                            marginHorizontal: 10,
                            borderWidth: 1,
                            padding: 10,
                            marginBottom: 10,
                            textAlignVertical: "top",
                            borderRadius: 6,
                          }}
                          multiline={true}
                          numberOfLines={5}
                          onChangeText={(text) => {
                            this.setState({ comment: text });
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        backgroundColor: "green",
                        marginTop: 15,
                        borderRadius: 6,
                        paddingVertical: 10,
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          alert(this.state.comment);
                        }}
                      >
                        <Text style={[styles.txtWhite]}>Service is done!</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : null}
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
