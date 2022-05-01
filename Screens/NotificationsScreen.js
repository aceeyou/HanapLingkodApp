import React, {useState} from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity,StatusBar, ScrollView } from 'react-native';
import CustomHeader from '../components/CustomerHeader';
import NotificationItem from '../components/NotificationItem';

const onTheWay_TitleMessage = ["The worker is on its way!", "Your worker is right around the corner"]
const onTheWay_Message = ["Please ensure that you have your face mask on and observe physical distancing.", "Please prepare your OTP (One Time Password) for a smooth transaction"]
const requestApproved_TitleMessage = ["Your request has been approved", "Your worker said YES!"]
const requestApproved_Message = ["Kindly check your bookings on the homepage or in the three-line menu.", "You can now message your Worker for a more detailed discussion"]

function getMessage(list){
  let randomElement = Math.floor(Math.random() * list.length);

  return list[randomElement]
}


function NotificationsScreen({navigation}) {
  // const [ msg, setMsg ] = useState('');

  // const chooseMsg = (list) => {
  //   console.log(list)
  //   // let randomElement = Math.floor(Math.random() * list.length);
  //   // let elem = list[randomElement]
  //   // console.log(elem)
  //   setMsg(list[randomElement])
  // }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight,}}>
      <ScrollView>
        <CustomHeader title="Notifications" isHome={true} navigation={navigation}/>
        <View style={{flex: 1, alignItems: 'center', paddingHorizontal: 30, marginTop: 40}}>
          <NotificationItem id="1" title={getMessage(onTheWay_TitleMessage)} description="Kindly check your bookings on the homepage or in the three-line menu." />
          <NotificationItem id="2" title={getMessage(requestApproved_TitleMessage)} description="Kindly look for other available workers." />
          <NotificationItem id="3" title={getMessage(onTheWay_TitleMessage)} description="Please ensure that you have your face mask on and observe physical distancing." />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default NotificationsScreen;