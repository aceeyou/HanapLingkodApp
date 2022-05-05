import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from "react-native-date-picker";
import CustomHeader from "../components/CustomerHeader";
import moment from "moment";

const windowHeight = Dimensions.get("window").height;

export default function RequestForm(props, { navigation }) {
  const route = useRoute();

  const [chosenDate, setDate] = useState();
  const [chosenTime, setTime] = useState();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    setDate(moment(date).format("ddd,  MMMM  D"));
    hideDatePicker();
  };

  const handleTimeConfirm = (time) => {
    // console.warn("A date has been picked: ", time);
    setTime(moment(time).format("h:mm a"));
    hideTimePicker();
  };

  const postRequest = () => {
    alert("hi");

    //do stuff backend here

    // go to myrequest page/screen
    props.navigation.navigate("Requests");
  };

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <ScrollView style={{}}>
        <CustomHeader title="Request Form" navigation={navigation} />
        <View style={styles.container}>
          <Text style={styles.txtHeader}>Request Summary</Text>
          <View style={styles.boxContainer}>
            <View style={[styles.section, styles.textSpace]}>
              <Text>Service Requested:</Text>
              <Text style={styles.txtData}>Deep Cleaning</Text>
            </View>

            <View style={[styles.section, styles.textSpace]}>
              <Text>Location:</Text>
              <Text style={styles.txtData}>Daet Cam Norte</Text>
            </View>

            <View style={[styles.section, styles.textSpace]}>
              <Text>Recruiter Name:</Text>
              <Text style={styles.txtData}>Chubby Bunny Reyes</Text>
            </View>

            <Text style={{ marginTop: 10 }}>Date and Time</Text>
            <View style={[styles.section, { marginTop: 5 }]}>
              <TouchableOpacity
                onPress={showDatePicker}
                style={{
                  backgroundColor: "#fff",
                  padding: 7,
                  marginRight: 10,
                  width: 130,
                  borderRadius: 6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {chosenDate ? (
                  <Text style={{ fontSize: 13 }}>{chosenDate}</Text>
                ) : (
                  <Text style={{ fontSize: 13 }}>Select Date </Text>
                )}
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
                <Image
                  source={require("../assets/icons/bookings.png")}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={showTimePicker}
                style={{
                  backgroundColor: "#fff",
                  padding: 7,
                  width: 120,
                  borderRadius: 6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {chosenTime ? (
                  <Text style={{ fontSize: 13 }}>{chosenTime}</Text>
                ) : (
                  <Text style={{ fontSize: 13 }}>Select Time </Text>
                )}
                <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
                  display="spinner"
                  onConfirm={handleTimeConfirm}
                  onCancel={hideTimePicker}
                />
                <Image
                  source={require("../assets/icons/bookings.png")}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>

            {/* See worker detail Button */}
            <View
              style={{ elevation: 10, shadowColor: "#52006A", marginTop: 5 }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#393838",
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 10,
                  marginBottom: 30,
                  alignSelf: "flex-start",
                  elevation: 10,
                  shadowColor: "#52006A",
                }}
                onPress={() => alert("hi")}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: "500",
                    fontSize: 15,
                    color: "#fff",
                    flexWrap: "nowrap",
                  }}
                >
                  See worker's details here
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Post a Request Button */}
          <View
            style={{
              flex: 1,
              flexDirection: "column-reverse",
              alignSelf: "center",
              width: 300,
              paddingBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#EF5252",
                paddingVertical: 12,
                alignItems: "center",
                borderRadius: 10,
              }}
              onPress={postRequest}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                Post a Request
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight - StatusBar.currentHeight - 100,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  txtHeader: {
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  boxContainer: {
    backgroundColor: "#dddcdc",
    width: "90%",
    padding: 20,
    borderRadius: 6,
    elevation: 5,
    shadowColor: "#52006A",
  },
  section: {
    flexDirection: "row",
    paddingTop: 7,
    marginBottom: 15,
  },
  textSpace: {
    flexDirection: "column",
  },
  txtData: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 5,
  },
});
