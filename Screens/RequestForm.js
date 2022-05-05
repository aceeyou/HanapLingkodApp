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
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from "react-native-date-picker";

import CustomHeader from "../components/CustomerHeader";

export default function RequestForm(props, { navigation }) {
  const route = useRoute();

  const [chosenDate, setDate] = useState("");
  const [chosenTime, setTime] = useState("");

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
    console.warn("A date has been picked: ", date);
    setDate(date);
    console.log(date);
    hideDatePicker();
  };

  const handleTimeConfirm = (time) => {
    console.warn("A date has been picked: ", time);
    setTime(time);
    console.log(time);
    hideTimePicker();
  };

  //

  //   const [date, setDatePicker] = useState(new Date());

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <ScrollView>
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

            <Text>Date and Time</Text>
            <View style={styles.section}>
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
                <Text>Select Date</Text>
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
                <Text>Select Time</Text>
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

            <TouchableOpacity
              style={{
                backgroundColor: "#393838",
                padding: 10,
                borderRadius: 10,
                width: 180,
                marginBottom: 30,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                See worker's details here
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "green",
              paddingHorizontal: 40,
              justifiyContent: "flex-end",
              marginTop: "45%",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#EF5252",
                paddingVertical: 15,
                alignItems: "center",
                borderRadius: 10,
              }}
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
    flex: 1,
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "pink",
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
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 5,
  },
});
