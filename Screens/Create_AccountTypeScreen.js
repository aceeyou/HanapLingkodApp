import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import CustomHeader from "../components/CustomerHeader";

function Create_AccountTypeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <CustomHeader title="" navigation={navigation} isCreateAccount={true} />
      <View style={{ flex: 1, width: "100%", padding: 30 }}>
        <Text style={styles.textHeader}>Choose your Account</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("CAF_Recruiter")}
        >
          <Image
            source={require("../assets/logo/HANAPLINGKOD_LOGO.png")}
            style={styles.image}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Recruiter Account</Text>
            <Text>For user who are searching for on-demand home services</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.btnWorker]}
          onPress={() => navigation.navigate("CAF_Worker")}
        >
          <Image
            source={require("../assets/logo/HANAPLINGKOD_LOGO.png")}
            style={styles.image}
          />
          <View style={{ flex: 1 }}>
            <Text style={[styles.header, styles.headerWhite]}>
              Worker Account
            </Text>
            <Text style={[styles.headerWhite]}>
              For individuals who offer on-demand home services
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#cfcfcf",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: "#C5C5C5",
  },
  btnWorker: {
    backgroundColor: "#2080FF",
  },
  headerWhite: {
    color: "#fff",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
    backgroundColor: "#fff",
  },
  textHeader: {
    textAlign: "center",
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 40,
  },
  header: {
    width: "100%",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
  },
});

export default Create_AccountTypeScreen;
