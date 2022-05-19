import React, { useState } from "react";
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
import NotificationItem from "../components/NotificationItem";

const onTheWay_TitleMessage = [
  "The worker is on its way!",
  "Your worker is right around the corner",
];
const onTheWay_Message = [
  "Please ensure that you have your face mask on and observe physical distancing.",
  "Please prepare your OTP (One Time Password) for a smooth transaction",
];
const requestApproved_TitleMessage = [
  "Your request has been approved",
  "Your worker said YES!",
];
const requestApproved_Message = [
  "Kindly check your bookings on the homepage or in the three-line menu.",
  "You can now message your Worker for a more detailed discussion",
];

function getMessage(list) {
  let randomElement = Math.floor(Math.random() * list.length);

  return list[randomElement];
}

function NotificationsScreen({ navigation }) {
  // const [ msg, setMsg ] = useState('');

  // const chooseMsg = (list) => {
  //   console.log(list)
  //   // let randomElement = Math.floor(Math.random() * list.length);
  //   // let elem = list[randomElement]
  //   // console.log(elem)
  //   setMsg(list[randomElement])
  // }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <CustomHeader
        title="Notifications"
        isHome={true}
        navigation={navigation}
      />
      <View
        style={{
          flex: 1,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            paddingVertical: 7,
            paddingHorizontal: 20,
            backgroundColor: "lightgray",
            color: "#000",
          }}
        >
          Comming Soon
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default NotificationsScreen;
