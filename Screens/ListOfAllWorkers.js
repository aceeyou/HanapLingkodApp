import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import "../global/Global";
import CustomHeader from "../components/CustomerHeader";
import DisplayWorkers from "../components/DisplayWorkers";

export default class ListOfAllWorkers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      data: [],
    };
  }

  componentMount() {
    console.log(global.selectedWorkSubCat);
    fetch("http://" + global.IPaddress + ":3000/worker", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoaded: false,
          data: responseJson,
        });
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }

  render() {
    let { data } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <CustomHeader title="Available Workers" />
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.txtHeader}>
              Below are the list of all workers
            </Text>
          </View>
          {this.state.isLoaded ? this.componentMount() : null}

          <View
            style={{
              flex: 1,
              marginTop: 0,
            }}
          >
            <FlatList
              ListFooterComponent={<View style={{ height: 60 }} />}
              keyExtractor={(item) => item._id}
              data={data}
              renderItem={({ item }) => (
                <View style={styles.btnView}>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      global.selectedWorker = item._id;
                      global.userRole === "recruiter"
                        ? this.props.navigation.navigate("RequestFormHome")
                        : this.props.navigation.navigate(
                            "WorkerProfileLOAWScreen"
                          );
                    }}
                  >
                    <View
                      style={{
                        flex: 1.1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "skyblue",
                      }}
                    >
                      <Image
                        source={require("../assets/logo/HANAPLINGKOD_LOADING_SCREEN.jpg")}
                        style={{
                          width: "100%",
                          height: "100%",
                          // borderWidth: 1,
                          // borderColor: "#000",
                          // borderTopLeftRadius: 6,
                          // borderBottomLeftRadius: 6,
                          // borderRight: "none",
                        }}
                      />
                    </View>
                    <View style={{ flex: 2, padding: 15 }}>
                      <Text style={{ fontSize: 16 }}>
                        {item.firstname} {item.lastname}
                      </Text>

                      <Text style={{ color: "#434544", fontSize: 13 }}>
                        {item.category}
                      </Text>

                      <View
                        style={{
                          marginTop: 10,
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 12,
                            color: "#434544",
                            marginRight: 5,
                          }}
                        >
                          {/* {item.priceRange} */}
                          4.5
                        </Text>
                        <Image
                          source={require("../assets/icons/star-filled.png")}
                          style={{ width: 14, height: 14, marginRight: 3 }}
                        />
                        <Image
                          source={require("../assets/icons/star-filled.png")}
                          style={{ width: 14, height: 14, marginRight: 3 }}
                        />
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: 3,
                        }}
                      >
                        <Image
                          source={require("../assets/icons/location.png")}
                          style={{
                            width: 14,
                            height: 14,
                            marginRight: 5,
                            alignItems: "center",
                          }}
                        />
                        <Text
                          style={{ fontSize: 12, marginTop: 0 }}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          {item.address}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
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
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  viewContainer: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
  txtHeader: {
    paddingHorizontal: 50,
    marginTop: 30,
    fontSize: 15,
  },
  btnView: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  btn: {
    backgroundColor: "#dddcdc",
    borderRadius: 7,
    overflow: "hidden",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
  },
});
