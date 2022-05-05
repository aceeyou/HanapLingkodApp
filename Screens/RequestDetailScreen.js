import React from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import CustomHeader from "../components/CustomerHeader";

const windowHeight = Dimensions.get("window").height;

export default function RequestDetailScreen(props, { navigation }) {
  return (
    <SafeAreaView>
      <ScrollView style={{ marginTop: StatusBar.currentHeight }}>
        <CustomHeader title="Request Detail" />
        <View style={styles.container}>
          <Text style={styles.txtHeader}>Request Summary</Text>
          <View style={styles.boxContainer}>
            <View style={[styles.section, styles.textSpace]}>
              <Text>Service Requested:</Text>
              <Text style={styles.txtData}>Deep Cleaning</Text>
              <Text style={styles.txtData}>Bedrrom</Text>
            </View>

            <View style={[styles.section, styles.textSpace]}>
              <Text>Date and Time:</Text>
              <Text style={styles.txtData}>Thu, May 11, 10:30 am</Text>
            </View>

            <View style={[styles.section, styles.textSpace]}>
              <Text>Worker Name:</Text>
              <Text style={styles.txtData}>Juan Dela Cruz</Text>
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
