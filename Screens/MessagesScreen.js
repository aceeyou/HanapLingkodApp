import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CustomHeader from "../components/CustomerHeader";
import { useFonts } from 'expo-font';
import RequestsItem_Recruiter from "../components/RequestsItem_Recruiter";
import RequestsItem_Worker from "../components/RequestItem_Worker";

function MessagesScreen({ navigation }) {
  const [DATA, setData] = useState([]);
  const [didUpdate, setUpdate] = useState(false);

  const [loaded] = useFonts({
    LexendDeca_Regular: require('../assets/fonts/LexendDeca-Regular.ttf'),
    LexendDeca_Medium: require('../assets/fonts/LexendDeca-Medium.ttf'),
    LexendDeca_SemiBold: require('../assets/fonts/LexendDeca-SemiBold.ttf'),
    LexendDeca_Bold: require('../assets/fonts/LexendDeca-Bold.ttf'),
    LexendDeca_ExtraBold: require('../assets/fonts/LexendDeca-ExtraBold.ttf'),
    LexendDeca_Black: require('../assets/fonts/LexendDeca-Black.ttf'),
  });

  // if (!loaded) {
  //   return null;
  // }

  const imageURI = "../Server/Src/public/uploads/"
  useEffect(() => {
    if(!DATA){
      fetch("http://" + global.IPaddress + ":3000/request/" + global.userID, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },})
      .then((response) => response.json())
      .then((responseJson) => {
        // this.updateData(responseJson);
        setData(responseJson);
        global.requestCount = DATA.length;
        // console.log("len: ", this.state.data.length);
        // console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
      console.log("1st fetch: done")
    }
  }, [])

  useEffect(() => {
 
      fetch("http://" + global.IPaddress + ":3000/request/" + global.userID, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },})
      .then((response) => response.json())
      .then((responseJson) => {
        // this.updateData(responseJson);
        setData(responseJson);
        global.requestCount = DATA.length;
        // console.log("len: ", this.state.data.length);
        // console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
      console.log("fetch: done")
      console.log(DATA)

    
  }, [didUpdate])

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <CustomHeader title="Chats" isHome={true} navigation={navigation} />

      {/* update the list by setUpdate(!didUpdate) */}

      <View>
        <TouchableOpacity
        style={{padding: 10, marginHorizontal: 30, marginTop: 20, backgroundColor: "#2080ff", justifyContent: 'center', alignItems: 'center'}}
        onPress={() => {setUpdate(true); console.log("data updated")}}
        >
        <Text style={{color: '#fff'}}>Update Data</Text></TouchableOpacity>
        <View>
          <Text>{DATA.schedule}</Text>
        </View>

        <View
          >
            <FlatList
              extraData={DATA}
              ListHeaderComponent={
                <View>
                  <CustomHeader title="My Requests" />
                  <Text style={{ fontSize: 15, marginLeft: 50, marginVertical: 30 }}>Below are the list of requests</Text>
                </View>
              }
              ListFooterComponent={<View style={{ height: 120 }} />}
              keyExtractor={(item) => item._id}
              data={DATA}
              renderItem={({ item }) => (
                // Recruiter View
                <View>
                  { global.userRole == "recruiter" ? <RequestsItem_Recruiter item = {item} /> : <RequestsItem_Worker item = {item} />}
                </View>
                // <TouchableOpacity style={styles.userBlocks}>
                //   <View style={[styles.topContainer]}>
                //     <Image source={require("../assets/bedroom.jpg")} style={{width: 75, height: 75, borderRadius: 20, borderWidth: 2, borderColor: '#fff'}} />
                //     <View style={[styles.txtContainer]}>
                //       <Text style={[styles.text, styles.txtServiceCategory]}>{item.serviceCategory ? item.serviceCategory : "Service Category"}</Text>
                //       <Text style={[styles.text, styles.txtName]}>{item.workerId.firstname} {item.workerId.lastname}</Text>
                //       <View style={{flexDirection: 'row', alignItems: 'center'}}>
                //         <Image source={require("../assets/icons/calendar-white.png")} style={{width: 20, height: 20, marginRight: 10,}} />
                //         <Text style={[styles.text, styles.txtSchedule]}>{item.schedule}</Text>
                //         <Image source={require("../assets/icons/clock-white.png")} style={{width: 20, height: 20, marginLeft: 15, marginRight: 10,}} />
                //         <Text style={[styles.text, styles.txtSchedule]}>{item.time}</Text>
                //       </View>
                //     </View>

                //   </View>
                //   <View style={[styles.bottomContainer]}>
                //     <Text style={[styles.text, styles.recruiterTxt]}>Waiting for the Worker's response</Text>
                //   </View>

                // </TouchableOpacity>
              )}
            />
          </View>
      </View>      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userBlocks: {
    padding: 18, 
    marginHorizontal: 20, 
    marginBottom: 18, 
    borderRadius: 10,
    backgroundColor: '#5bc0be',
    shadowColor: "#2B2525",
    elevation: 5,
  },
  topContainer: {
    flexDirection: 'row',
  },
  bottomContainer: {
    marginTop: 18,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 18,
    alignItems: 'center',
    borderColor: '#C7BFBF',
  },
  txtContainer: {
    marginHorizontal: 15,
    width: '70%',
  },
  txtSchedule: {
    fontSize: 16,
    fontFamily: 'LexendDeca_Medium'
  },
  recruiterTxt: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'LexendDeca_Medium'
  },
  text: {
    color: "#fff",
    overflow: 'hidden',
  },
  txtServiceCategory: {
    // opacity: 0.5,
    fontSize: 15,
    fontFamily: "LexendDeca_SemiBold"
  },
  txtName: {
    fontSize: 20,
    fontFamily: "LexendDeca_Medium",
    marginVertical: 2,
  },
  addressBlock: {
    display: 'flex',
    flexDirection: 'row',
    width: 230,
    alignItems: 'center',
    overflow: 'hidden'
  },
  txtAddress: {
    marginTop: 2,
    fontSize: 16,
    fontFamily: "LexendDeca_Regular",
    overflow: 'hidden',
  },
  txtFeeRange: {
    marginTop: 3,
    fontSize: 13,
    fontFamily: "LexendDeca_Regular"
  },
})

export default MessagesScreen;
