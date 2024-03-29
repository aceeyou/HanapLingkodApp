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
  FlatList,
} from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Comments from "../components/Comments";
import CustomerHeader from "../components/CustomerHeader";

import "../global/Global";

export default class UserProfilePage extends React.Component {
  // const [data, setData] = useState({
  //   isLoaded: true,
  //   data: [],
  // });

  // const [imageuri, setimageuri] = useState("");
  // const imageURI = require("../Server/Src/public/uploads/" +
  //   "16520229485852ce02904-301f-4774-936f-7ada34c7527a.jpg");

  // const fetchData = () => {
  //   let route;
  //   if (global.userRole === "recruiter") {
  //     route = "recuiter";
  //   } else route = "worker";

  //   fetch(
  //     "http://" + global.IPaddress + ":3000/" + route + "/" + global.userID,
  //     {
  //       method: "GET",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data._govId);
  //       setData({
  //         isLoaded: false,
  //         data: data,
  //       });
  //       setimageuri(data.GovId);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      data: [],
    };
  }

  goRefresh() {
    this.focusListener = this.props.navigation.addListener("focus", () => {
      this.componentMount();
    });
  }

  componentMount() {
    let route;
    if (global.userRole === "recruiter") {
      route = "recuiter";
    } else route = "worker";

    fetch(
      "http://" + global.IPaddress + ":3000/" + route + "/" + global.userID,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoaded: false,
          data: data,
        });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }

  renderHeader() {
    return (
      <View>
        <Text>
          {this.state.data.firstname}
          {this.state.data.lastname}
        </Text>
      </View>
    );
  }

  //this.componentMount()

  render() {
    let { data } = this.state;
    // this.componentMount();
    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight,
        }}
      >
        <ScrollView>
          {this.goRefresh()}
          {this.state.isLoaded ? this.componentMount() : null}
          <CustomerHeader title="User Profile" isCreateAccount={true} />

          <View style={styles.mainContainer}>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: "https://media.istockphoto.com/vectors/male-profile-picture-man-face-image-web-avatar-vector-id1390051313?b=1&k=20&m=1390051313&s=612x612&w=0&h=qDej5q848g6jA_xLnZBfqEc2wQQVQThFUWifktBbkf8=",
                }}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 45,
                }}
              />

              <View style={styles.nameBlock}>
                <Text style={styles.usersName}>
                  {" "}
                  {data.firstname} {data.lastname}
                </Text>
                <Image
                  style={styles.verifyIcon}
                  source={require("../assets/icons/verified-green.png")}
                />
              </View>

              <Text style={styles.usersService}>
                {global.userRole.charAt(0).toUpperCase() +
                  global.userRole.slice(1)}
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

            {/* Edit profile button */}
            {/* <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 6,
                  borderWidth: 1,
                  borderColor: "#1e1f21",
                  marginBottom: 30,
                }}
                onPress={() => navigation.navigate("EditUserProfile")}
              >
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View> */}

            {/* Main description */}
            <View style={styles.infoContainer}>
              {/* username */}
              <View style={[styles.viewRow]}>
                {/* <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/50/000000/email.png",
                }}
                style={{ width: 18, height: 18, marginRight: 15 }}
              /> */}
                <Text style={styles.infolabel}>Username</Text>
                <Text style={styles.infoDetail}>
                  {this.state.data.username}
                </Text>
              </View>

              {/* home address */}
              <View style={[styles.viewRow]}>
                {/* <Image
                source={{
                  uri: "https://img.icons8.com/material-rounded/24/000000/address.png",
                }}
                style={{ width: 18, height: 18, marginRight: 15 }}
              /> */}
                <Text style={styles.infolabel}>Home Address</Text>
                <Text style={styles.infoDetail}>{data.address}</Text>
              </View>

              {/* birthdate */}
              <View style={[styles.viewRow]}>
                {/* <Image
                source={{
                  uri: "https://img.icons8.com/ios-glyphs/30/000000/easter-cake.png",
                }}
                style={{ width: 20, height: 20, marginRight: 15 }}
              /> */}
                <Text style={styles.infolabel}>Birth Date</Text>
                <Text style={styles.infoDetail}>{data.birthday}</Text>
              </View>

              {/* sex | gender */}
              <View style={[styles.viewRow]}>
                {/* <Image
                source={{
                  uri: "https://img.icons8.com/fluency-systems-filled/48/000000/gender.png",
                }}
                style={{ width: 18, height: 18, marginRight: 15 }}
              /> */}
                <Text style={styles.infolabel}>Gender</Text>
                <Text style={styles.infoDetail}>{data.sex}</Text>
              </View>

              {/* phone number */}
              <View style={[styles.viewRow]}>
                {/* <Image
                source={{
                  uri: "https://img.icons8.com/material-rounded/24/000000/ringing-phone.png",
                }}
                style={{ width: 18, height: 18, marginRight: 15 }}
              /> */}
                <Text style={styles.infolabel}>Phone Number</Text>
                <Text style={styles.infoDetail}>{data.phoneNumber}</Text>
              </View>

              {/* about */}
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
                    onPress={() =>
                      this.props.navigation.navigate("CommentsHome")
                    }
                  >
                    <Text>Read Comments and Reviews</Text>
                    <Image
                      source={require("../assets/icons/arrow-right.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Logout */}
              <View style={styles.logoutBtnCtn}>
                <TouchableOpacity style={styles.logoutBtn}>
                  <Text style={styles.logoutTxt}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
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
    marginRight: 3,
  },
  verifyIcon: {
    width: 18,
    height: 18,
    marginLeft: 5,
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
    fontSize: 18,
    fontWeight: "bold",
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
