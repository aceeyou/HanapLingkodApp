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
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import "../global/Global";
import CustomHeader from "../components/CustomerHeader";
import DisplayWorkers from "../components/DisplayWorkers";

// function nav() {
//   return (navigation = useNavigation());
// }

let toTrue = true;

export default class ListOfWorkers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: global.isTrue,
      data: [],
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
        ":3000/worker/category/" +
        global.selectedWorkSubCat,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(global.selectedWorkSubCat);

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
    // let { navigation } = this.props;
    // navigation.addListener("willFocus", () => console.log("hi"));
    // let { navigation } = useNavigation();
    // let isFocused = useIsFocused();

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <CustomHeader title="Available Workers" />
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.txtHeader}>
              Below are the list of {global.selectedWorkSubCat} workers
            </Text>
          </View>

          {this.goRefresh()}
          {/* {this.state.isLoaded ? this.componentMount() : null} */}

          <View
            style={{
              flex: 1,
              marginTop: 0,
            }}
          >
            <FlatList
              extraData={data}
              ListFooterComponent={<View style={{ height: 60 }} />}
              keyExtractor={(item) => item._id}
              data={data}
              renderItem={({ item }) => (
                <View style={styles.btnView}>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      // alert(item._id);
                      global.selectedWorker = item._id;
                      global.userRole === "recruiter"
                        ? this.props.navigation.navigate("RequestFormHome")
                        : this.props.navigation.navigate(
                            "WorkerProfilePageHome"
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
                        source={{
                          uri: "https://img.freepik.com/free-vector/generic-man-portrait-default-male-gender-avatar_543062-419.jpg?w=2000",
                        }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>
                    <View style={{ flex: 2, padding: 15 }}>
                      <Text style={{ fontSize: 16, color: "#0b132b" }}>
                        {item.firstname} {item.lastname}
                      </Text>

                      <Text style={{ color: "#1c2541", fontSize: 13 }}>
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
                          style={{
                            fontSize: 12,
                            marginTop: 0,
                            color: "#1c2541",
                          }}
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
    backgroundColor: "#fafafa",
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
    backgroundColor: "#fdfffc",
    borderRadius: 7,
    overflow: "hidden",
    flexDirection: "row",
    elevation: 3,
  },
});
