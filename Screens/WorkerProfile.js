import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import CustomerHeader from "../components/CustomerHeader";

import "../global/Global";

export default function WorkerProfile({ navigation }) {
  const [data, setData] = useState({
    isLoaded: true,
    data: [],
  });

  const [imageuri, setimageuri] = useState("");
  const imageURI =
    "../Server/Src/public/uploads/" +
    "16520229485852ce02904-301f-4774-936f-7ada34c7527a.jpg";

  const fetchData = () => {
    let route;
    fetch(
      "http://" + global.IPaddress + ":3000/worker/" + global.selectedWorker,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data._govId);
        setData({
          isLoaded: false,
          data: data,
        });
        setimageuri(data.GovId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView>
        <CustomerHeader title="Worker Profile" isCreateAccount={true} />

        <View style={styles.mainContainer}>
          {data.isLoaded ? fetchData() : null}
          <View style={styles.imgContainer}>
            <Image
              source={require(imageURI)}
              style={{ width: 90, height: 90, borderRadius: 45 }}
            />

            <View style={styles.nameBlock}>
              <Text style={styles.usersName}>
                {" "}
                {data.data.firstname} {data.data.lastname}
              </Text>
              <Image
                style={styles.verifyIcon}
                source={require("../assets/icons/verified-green.png")}
              />
            </View>

            <Text style={styles.usersService}>
              Worker | {data.data.category}
            </Text>
          </View>

          {/* Overview Stats */}
          <View style={styles.overviewContainer}>
            <View style={styles.containerCard}>
              {/* Rating */}
              <View style={styles.ovRating}>
                {/* Top */}
                <View style={styles.ovRatingTop}>
                  <Image
                    source={require("../assets/icons/star-filled.png")}
                    style={{ width: 16, height: 16, marginRight: 3 }}
                  />
                  <Text style={[styles.text, styles.txtTop]}>5</Text>
                </View>
                {/* Botttom */}
                <View style={styles.ovRatingBottom}>
                  <Text style={[styles.text, styles.txtBottom]}>Rating</Text>
                </View>
              </View>

              {/* Jobs/Recruits Completed */}
              <View style={styles.ovCompleted}>
                <Text style={[styles.text, styles.txtTop]}>16</Text>
                <Text style={[styles.text, styles.txtBottom]}>
                  Jobs Completed
                </Text>
              </View>

              {/* Number of Reviews */}
              <View style={styles.ovReviews}>
                <Text style={[styles.text, styles.txtTop]}>12</Text>
                <Text style={[styles.text, styles.txtBottom]}>Reviews</Text>
              </View>
            </View>
          </View>

          {/* Main description */}
          <View style={styles.infoContainer}>
            {/* username */}
            <View style={[styles.viewRow]}>
              <Text style={styles.infolabel}>About</Text>
              <Text style={styles.infoDetail}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                interdum molestie magna sit amet venenatis. Vestibulum magna
                ligula, lobortis non quam ac, volutpat iaculis eros. In
                venenatis cursus porttitor. Donec vulputate mi at commodo
                lacinia. Mauris pharetra nisl quam, et sollicitudin est porta
                in.
              </Text>
            </View>

            {/* home address */}
            <View style={[styles.viewRow]}>
              <Text style={styles.infolabel}>Services</Text>
              <Text style={styles.infoDetail}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                interdum molestie magna sit amet venenatis. Vestibulum magna
                ligula, lobortis non quam ac, volutpat iaculis eros.
              </Text>
            </View>

            {/* birthdate */}
            <View>
              <Text style={{ fontSize: 16, marginBottom: 10 }}>Comments</Text>
              {/* <Text>This is a comment</Text> */}
              <View style={{ elevation: 6 }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 20,
                    paddingVertical: 7,
                    borderRadius: 6,
                    backgroundColor: "#fffeee",
                  }}
                  onPress={() => navigation.navigate("CommentsProfileHome")}
                >
                  <Text>Read Comments and Reviews</Text>
                  <Image source={require("../assets/icons/arrow-right.png")} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 30,
  },
  imgContainer: {
    alignItems: "center",
    paddingTop: 10,
    marginBottom: 20,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: "#dddcdc",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  nameBlock: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  usersName: {
    paddingBottom: 3,
    fontSize: 16,
    fontWeight: "bold",
  },
  verifyIcon: {
    width: 18,
    height: 18,
  },
  usersService: {
    color: "#646466",
  },
  overviewContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  containerCard: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 60,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#1e1f21",
  },
  ovRating: {
    flex: 1,
    alignItems: "center",
  },
  ovRatingTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  ovRatingBottom: {},
  ovCompleted: {
    flex: 2.2,
    alignItems: "center",
  },
  ovReviews: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  txtTop: {
    fontSize: 17,
    fontWeight: "bold",
  },
  txtBottom: {
    fontSize: 12,
  },
  viewRow: {
    marginBottom: 20,
  },
  infolabel: {
    fontSize: 13,
    marginBottom: 2,
    color: "#757678",
  },
  infoDetail: {
    fontSize: 15,
    // marginLeft: 10,
  },
  logoutBtnCtn: {
    alignItems: "center",
    marginTop: 40,
  },
  logoutBtn: {
    backgroundColor: "#1e1f21",
    paddingHorizontal: 100,
    paddingVertical: 12,
    borderRadius: 6,
    elevation: 6,
    shadowColor: "black",
  },
  logoutTxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
