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
    fetch("http://" + global.IPaddress + ":3000/service", {
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
                      global.selectedServiceID = item._id;
                      this.props.navigation.navigate("RequestFormScreen");
                    }}
                  >
                    <View style={{ flex: 1.1 }}>
                      <Image
                        source={require("../assets/bg.png")}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>
                    <View style={{ flex: 2, padding: 15 }}>
                      <Text style={{ fontSize: 16 }}>{item.name}</Text>

                      <Text style={{ color: "#434544", fontSize: 13 }}>
                        {item.name}
                      </Text>

                      <Text
                        style={{
                          marginTop: 10,
                          fontSize: 12,
                          color: "#434544",
                        }}
                      >
                        {item.priceRange}
                      </Text>

                      <Text style={{ fontSize: 12, marginTop: 3 }}>
                        Avg. Work Hours {item.workingHours}
                      </Text>
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
