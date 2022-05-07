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
import CustomHeader from "../components/CustomerHeader";
import DisplayWorkers from "../components/DisplayWorkers";

// const { navigation } = useNavigation();
export default class ListOfAllWorkers extends React.Component {
  //   const route = useRoute();
  // use route.params.title to know which services to display

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      data: [],
    };
  }

  renderItem = ({ data }) => {
    return (
      // <View
      //   style={{
      //     paddingHorizontal: 20,
      //     paddingVertical: 10,
      //     backgroundColor: "#dddcdc",
      //     marginBottom: 10,
      //   }}
      // >
      //   <Text>{this.state.data[index].name}</Text>
      // </View>
      // console.log(data)
      <View>
        {console.log("data: ", data)}
        <DisplayWorkers
          name={data.name}
          priceRange={data.price}
          avgWH={data.hours}
          image={require("../assets/bg.png")}
        />
      </View>
    );
  };

  componentMount() {
    fetch("http://192.168.1.2:3000/service", {
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
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <CustomHeader title="Available Workers" />
          <Text style={styles.txtHeader}>
            Below are the list of all workers
          </Text>

          {this.state.isLoaded ? this.componentMount() : null}

          <View style={{ height: "100%", paddingBottom: 100 }}>
            <FlatList
              keyExtractor={(item) => item._id}
              data={data}
              renderItem={({ item }) => (
                <View style={{ paddingHorizontal: 30, marginTop: 12 }}>
                  <TouchableOpacity
                    style={{ backgroundColor: "darkgray", padding: 30 }}
                  >
                    <Text>{item.name}</Text>
                    <Text>{item.name}</Text>
                    <Text>{item.name}</Text>
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
    marginBottom: 50,
  },
  txtHeader: {
    paddingHorizontal: 50,
    marginTop: 30,
    fontSize: 15,
  },
});
