import React, { Component, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { set } from "react-native-reanimated";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import CategoryButton from "../components/CategoryButton";
import CustomHeader from "../components/CustomerHeader";

import "../global/Global";

function HomeScreen(props) {
  const navigation = useNavigation();

  let reqLen = 0;
  const isFocused = useIsFocused();
  if (isFocused) reqLen = global.requestCount;

  // React.useEffect(() => {
  //   const unsubscribe = props.navigation.addListener("willfocus", () => {
  //     //Put your Data loading function here instead of my loadData()
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader
          title="Home"
          isHome={true}
          dp={require("../assets/bg.png")}
          navigation={navigation}
        />

        <Text
          style={{
            fontSize: 21,
            fontWeight: "bold",
            color: "#0d0d0c",
            paddingHorizontal: 40,
            paddingTop: 30,
          }}
        >
          Welcome,{" "}
          {global.userRole.charAt(0).toUpperCase() + global.userRole.slice(1)}!
        </Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[styles.btnItem, styles.btnRequests]}
            onPress={() => navigation.navigate("Requests")}
          >
            <Text style={styles.btnText}>Requests ({reqLen})</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnItem, styles.btnBookings]}
            onPress={() => navigation.navigate("Bookings")}
          >
            <Text style={styles.btnText}>Bookings (1)</Text>
          </TouchableOpacity>
        </View>

        {/* Button for every category of avialable jobs */}
        <View style={styles.categoryContainer}>
          <CategoryButton
            categoryImage={require("../assets/icons/Janitor.png")}
            title="Cleaning"
            navigation={navigation}
          />
          <CategoryButton
            categoryImage={require("../assets/icons/Drill.png")}
            title="Mounting"
            navigation={navigation}
          />
          <CategoryButton
            categoryImage={require("../assets/icons/Plumbing.png")}
            title="Plumbing"
            navigation={navigation}
          />
          <CategoryButton
            categoryImage={require("../assets/icons/Electrical.png")}
            title="Electrical"
            navigation={navigation}
          />
          <CategoryButton
            categoryImage={require("../assets/icons/Maintenance.png")}
            title="General"
            navigation={navigation}
          />
          <CategoryButton
            categoryImage={require("../assets/icons/Inspection.png")}
            title="Appliances"
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingVertical: 25,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#eee",
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#292c30",
  },
  btnContainer: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    width: "100%",
    paddingHorizontal: 36,
    marginVertical: 30,
  },
  btnItem: {
    flex: 1,
    backgroundColor: "#DDDCDC",
    padding: 10,
    height: 40,
    margin: 5,
    alignItems: "center",
    borderRadius: 6,
    elevation: 6,
  },
  btnRequests: {
    marginRight: 11,
    backgroundColor: "#5bc0be",
  },
  btnBookings: {
    marginLeft: 11,
    backgroundColor: "#1c2541",
  },
  btnText: {
    fontSize: 15.8,
    fontWeight: "700",
    color: "#fff",
  },
  categoryContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around",
    padding: 40,
    paddingBottom: 50,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    //   backgroundColor: '#F8F3F3'
    backgroundColor: "#2080FF",
    elevation: 5,
  },
});

export default HomeScreen;

{
  /* adds a button to add a service (worker side) */
}
{
  /* {global.userRole === "worker" ? (
          <View style={{ paddingHorizontal: 40 }}>
            <View style={{ elevation: 6, shadowColor: "#2387fc" }}>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  backgroundColor: "#2387fc",
                  paddingVertical: 10,
                  marginBottom: 35,
                  borderRadius: 8,
                }}
                onPress={() => {
                  alert("hi");
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  Add A Service
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null} */
}

{
  /* {setUserRole(global.userRole)} */
}

{
  /* {userRole === "recruiter" ? (
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#0d0d0c",
              paddingHorizontal: 40,
              paddingTop: 30,
            }}
          >
            Welcome, Recruiter!
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#0d0d0c",
              paddingHorizontal: 40,
              paddingTop: 30,
            }}
          >
            Welcome, Worker!
          </Text>
        )} */
}
