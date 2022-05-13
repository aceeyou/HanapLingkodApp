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
        {/* CLEANING SERVICES */}
        {route.params.title === "Cleaning" ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 30,
            }}
          >
            <DisplayServices_ListItem
              title="House Cleaning"
              category="Cleaning"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://media.istockphoto.com/photos/new-modern-living-room-with-kitchen-new-home-interior-photography-picture-id1031043754?k=20&m=1031043754&s=612x612&w=0&h=YH-fz0uS4ehW8WhTglUkS4eohtv9_KILyRTDm_1hPkc=",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Carpet Cleaning"
              category="Cleaning"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://media.angi.com/s3fs-public/carpet-cleaner-removing-dirt.jpg",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Disinfection Service"
              category="Cleaning"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://www.dalworth.com/images/disinfecting-service/disinfecting-solutions-image.jpg",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Aircon Cleaning"
              category="Cleaning"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://smileservelive.arcadier.io/images/categories/aircon-cleaning-80ax4ulb7wd8msn720lpma5dp.jpg",
              }}
              navigation={props.navigation}
            />
          </View>
        ) : null}

        {/* PLUMBING SERVICES */}
        {route.params.title === "Plumbing" ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 30,
            }}
          >
            <DisplayServices_ListItem
              title="Plumbing Installation"
              category="Plumbing"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/bedroom.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Plumbing Repair"
              category="Plumbing"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/bathroom.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Bidet Installation"
              category="Plumbing"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/aircon-window.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Water Heater Installation"
              category="Plumbing"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/aircon-split.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Water Heater Repair"
              category="Plumbing"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/aircon-split.jpg")}
              navigation={props.navigation}
            />
          </View>
        ) : null}

        {/* MOUNTING SERVICES */}
        {route.params.title === "Mounting" ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 30,
            }}
          >
            <DisplayServices_ListItem
              title="TV Mounting"
              category="Mounting"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/bedroom.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Aircon Installation"
              category="Mounting"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/bathroom.jpg")}
              navigation={props.navigation}
            />
          </View>
        ) : null}

        {/* ELECTRICAL SERVICES */}
        {route.params.title === "Electrical" ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 30,
            }}
          >
            <DisplayServices_ListItem
              title="Aircon Repair"
              category="Electrical"
              priceRange="P700 - P1200"
              avgWT=" 3 - 10 hours"
              image={require("../assets/bedroom.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Lighting Repair"
              category="Electrical"
              priceRange="P300 - P700"
              avgWT=" 1 - 3 hours"
              image={require("../assets/bathroom.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Lighting Installation"
              category="Electrical"
              priceRange="P300 - P700"
              avgWT=" 1 - 3 hours"
              image={require("../assets/aircon-window.jpg")}
              navigation={props.navigation}
            />
          </View>
        ) : null}

        {/* GENERAL SERVICES */}
        {route.params.title === "General" ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 30,
            }}
          >
            <DisplayServices_ListItem
              title="Grocery Shopping"
              category="General"
              priceRange="P300 - P700"
              avgWT=" 1 - 3 hours"
              image={require("../assets/bedroom.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Personal Shopping"
              category="General"
              priceRange="P300 - P700"
              avgWT=" 3 - 4 hours"
              image={require("../assets/bathroom.jpg")}
              navigation={props.navigation}
            />
          </View>
        ) : null}

        {/* APPLIANCES SERVICES */}
        {route.params.title === "Appliances" ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 30,
            }}
          >
            <DisplayServices_ListItem
              title="Washing Machine Repair"
              category="Appliances"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/bedroom.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Refrigerator Repair"
              category="Appliances"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/bathroom.jpg")}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="TV Power Repair"
              category="Appliances"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={require("../assets/aircon-window.jpg")}
              navigation={props.navigation}
            />
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DisplayListOfServices;
