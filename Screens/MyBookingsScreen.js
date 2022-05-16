import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert,
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

  render() {
    let { data } = this.state;

    return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        {this.state.isLoaded ? this.componentMount() : null}
        <CustomHeader title="My Bookings" />
        <View style={{ flex: 1, paddingHorizontal: 30, paddingBottom: 80 }}>
          <Text style={{ marginTop: 30, marginLeft: 20, fontSize: 16 }}>
            Below are the list of bookings
          </Text>

          <FlatList
            ListFooterComponent={<View style={{ height: 60 }} />}
            keyExtractor={(item) => item._id}
            data={data}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 10,
                  backgroundColor: "gray",
                  marginTop: 15,
                  borderRadius: 6,
                  elevation: 6,
                }}
              >
                <View style={{ marginBottom: 10 }}>
                  <View>
                    <Image />
                  </View>
                  {global.userRole === "recruiter" ? (
                    <View>
                      <Text>
                        {item.requestId.workerId.firstname}{" "}
                        {item.requestId.workerId.lastname}
                      </Text>
                      <Text>{item.requestId.location}</Text>
                    </View>
                  ) : (
                    <View>
                      <Text>
                        {item.requestId.recuiterId.firstname}{" "}
                        {item.requestId.recuiterId.lastname}
                      </Text>
                      <Text>{item.requestId.location}</Text>
                    </View>
                  )}
                </View>
                <View>
                  <View style={{ marginBottom: 5 }}>
                    <Text>{item.requestId.serviceCategory}</Text>
                    <Text>
                      {item.requestId.workerId.firstname}{" "}
                      {item.requestId.workerId.lastname}
                    </Text>
                  </View>
                  <View></View>
                </View>
                {global.userRole === "recruiter" ? (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Text>Worker is on the way!</Text>
                  </View>
                ) : (
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 10,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: "darkgray",
                        paddingHorizontal: 80,
                        paddingVertical: 7,
                        borderRadius: 6,
                      }}
                    >
                      <Text>On my way!</Text>
                    </TouchableOpacity>
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

export default MyBookingsScreen;
