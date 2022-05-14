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
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import "../global/Global";
import CustomHeader from "../components/CustomerHeader";
import DisplayWorkers from "../components/DisplayWorkers";

// function nav() {
//   return (navigation = useNavigation());
// }

export default class ListOfAllWorkers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      data: [],
    };
  }

  componentMount() {
    fetch("http://" + global.IPaddress + ":3000/worker", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
          isLoaded: false,
          data: responseJson,
        });
        console.log(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let { data } = this.state;
    // let { navigation } = useNavigation();
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
                      // alert(item._id);
                      global.selectedWorker = item._id;
                      this.props.navigation.navigate("RequestFormScreen");
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
                          uri: "https://s.yimg.com/ny/api/res/1.2/b0utpiLK707RZGImLQI7PQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTEwOTc-/https://s.yimg.com/os/289/2013/01/29/Coco-Martin-as-Juan-dela-Cruz-jpg_081130.jpg",
                        }}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>
                    <View style={{ flex: 2, padding: 15 }}>
                      <Text style={{ fontSize: 16 }}>
                        {item.firstname} {item.lastname}
                      </Text>

                      <Text style={{ color: "#434544", fontSize: 13 }}>
                        {/* {item.name} */}
                        Category
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
                          source={require("../assets/icons/location2.png")}
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
  },
});
