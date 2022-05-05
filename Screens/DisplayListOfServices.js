import { useRoute } from "@react-navigation/native";
import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import CustomHeader from "../components/CustomerHeader";
import DisplayServices_ListItem from "../components/DisplayServices_ListItem";

function DisplayListOfServices(props, { navigation }) {
  // get parameters from previoues route. example title

  // get the data

  const route = useRoute();
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <ScrollView>
        <CustomHeader title={route.params.title} navigation={navigation} />
        {route.params.title === "Cleaning" ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 30,
            }}
          >
            <DisplayServices_ListItem
              title="Deep Cleaning"
              category="Bedroom"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/bedroom.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Deep Cleaning"
              category="Bathroom"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/bathroom.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Aircon Cleaning"
              category="Window Type Aircon"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/aircon-window.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Aircon Cleaning"
              category="Split Type Aircon"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/aircon-split.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Aircon Cleaning"
              category="Split Type Aircon"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/aircon-split.jpg")}
              navigation={props.navigation}
            />
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DisplayListOfServices;
