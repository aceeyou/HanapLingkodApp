import React, { useState } from "react";
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
import CustomHeader from "../components/CustomerHeader";
import DisplayWorkers from "../components/DisplayWorkers";

function ListOfWorkers({ navigation }) {
  // use route.params.title to know which services to display
  const route = useRoute();

  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(true);

  const componentMount = () => {
    fetch("http://" + global.IPaddress + ":3000/worker", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        // this.setState({
        //   isLoaded: false,
        //   data: responseJson,
        // });

        setData([responseJson]);
        setLoaded(false);

        console.log(responseJson);
        console.log(isLoaded);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Available Workers" navigation={navigation} />

      <View>
        <Text style={styles.txtHeader}>
          Below are the list of workers for {route.params.title} services
        </Text>
      </View>

      {isLoaded ? componentMount : null}
      <View style={styles.viewContainer}>
        <DisplayWorkers
          id=""
          name="juan"
          type="Enterprise"
          category="profession"
          rating={5}
          address={"Awitan, Daet"}
          dp={require("../assets/bg.png")}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  btnView: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 15,
  },
});

export default ListOfWorkers;
