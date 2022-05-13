import React, { Component } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustomHeader from "../components/CustomerHeader";
import "../global/Global";
import { useNavigation } from "@react-navigation/native";
import CreateAccountForm_Worker from "./CreateAccountForm_Worker";

class Worker_ServiceOfferedSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      selectedService: "",
      selectedSubCat: "",
    };
  }

  updateUser = (user) => {
    this.setState({ user: user });
    this.arrayOfServices.push(user);
    console.log(this.arrayOfServices);
  };

  setService = (service) => {
    this.setState({ selectedService: service });
    this.arrayOfServices[0] = service;
    console.log("selectedService: ", this.state.selectedService);
  };

  setSubCat = (service) => {
    this.setState({ selectedSubCat: service });
    this.arrayOfServices[1] = service;
    console.log("sService: ", this.state.selectedSubCat);
  };

  createWorkerAccount = () => {
    const { route } = this.props;

    let localUri = route.params.image;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();

    // Assume "photo" is the name of the form field the server expects
    formData.append("govId", {
      uri: localUri,
      name: filename,
      type,
    });

    // console.log(route.params.firstname);
    // console.log(route.params.lastname);

    formData.append("firstname", route.params.firstname);
    formData.append("lastname", route.params.lastname);
    formData.append("birthdate", route.params.birthdate);
    formData.append("age", route.params.age);
    formData.append("sex", route.params.gender);
    formData.append("address", route.params.homeAdd);
    formData.append("workAddress", route.params.workAdd);
    formData.append("phoneNumber", route.params.phoneNumber);
    formData.append("username", route.params.username);
    formData.append("password", route.params.password);
    formData.append("GovId", filename);

    fetch("http://" + global.IPaddress + "3000/signup/worker", {
      method: "POST",
      body: formData,
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log("account created");
  };

  renderItem = ({ index }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingHorizontal: 10,
          paddingVertical: 7,
          backgroundColor: "darkgray",
          borderRadius: 6,
          marginRight: 4,
        }}
      >
        <Text style={{ color: "#fff" }}>{this.arrayOfServices[index]}</Text>
        <TouchableOpacity
          onPress={() => {
            this.arrayOfServices.splice(index, 1);
            console.log(this.arrayOfServices);
            this.setState({ refresh: true });
          }}
        >
          <Image
            source={require("../assets/icons/close.png")}
            style={{ width: 10, height: 10, marginLeft: 8 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  // route = () => {
  //   useRoute();
  // };

  arrayOfServices = [];
  render() {
    // console.log(route.params.firstname);
    return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <CustomHeader title="" />
        <Text
          style={{
            paddingTop: 40,
            alignSelf: "center",
            fontSize: 23,
            fontWeight: "700",
          }}
        >
          Worker Information
        </Text>
        <View
          style={{
            flex: 1,
            marginTop: 50,
            paddingHorizontal: 40,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              paddingHorizontal: 10,
              borderRadius: 8,
            }}
          >
            <Text style={{ paddingTop: 10 }}>
              Select a Service Category to continue:
            </Text>
            <Picker
              selectedValue={this.state.selectedService}
              onValueChange={this.setService}
              style={{ height: 50, width: "100%" }}
            >
              <Picker.Item label="Service Offered" value="" enabled={false} />
              <Picker.Item label="Cleaning" value="Cleaning" />
              <Picker.Item label="Plumbing" value="Plumbing" />
              <Picker.Item label="Mounting" value="Mounting" />
              <Picker.Item label="Electrical" value="Electrical" />
              <Picker.Item label="Errand" value="Errand" />
            </Picker>
          </View>

          <View
            style={{
              alignItems: "flex-start",
              marginTop: 8,
            }}
          >
            {/* <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              refreshing
              extraData={this.state.refresh}
              data={this.arrayOfServices}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItem}
            /> */}
            {/* <Text
              style={{
                backgroundColor: "pink",
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
            >
              {this.arrayOfServices[0]}
            </Text> */}
          </View>
          <View>
            {/* shows another dropdown when the user selected something */}
            {/* CLEANING */}
            {this.state.selectedService === "Cleaning" ? (
              <View style={{ marginTop: 50, paddingHorizontal: 0 }}>
                <Text>User Selected Cleaning</Text>
                <View
                  style={{ borderBottomWidth: 1, borderBottomColor: "black" }}
                >
                  <Picker
                    selectedValue={this.state.selectedSubCat}
                    onValueChange={this.setSubCat}
                    style={{ height: 50, width: "100%" }}
                  >
                    <Picker.Item
                      label="Cleaning Services:"
                      value=""
                      enabled={false}
                    />
                    <Picker.Item
                      label="House Cleaning"
                      value="House Cleaning"
                    />
                    <Picker.Item
                      label="Carpet Cleaning"
                      value="Carpet Cleaning"
                    />
                    <Picker.Item
                      label="Disinfection Cleaning"
                      value="Disinfection Cleaning"
                    />
                    <Picker.Item
                      label="Aircon Cleaning"
                      value="Aircon Cleaning"
                    />
                  </Picker>
                </View>
              </View>
            ) : null}

            {/* PLUMBING */}
            {this.state.selectedService === "Plumbing" ? (
              <View style={{ marginTop: 50, paddingHorizontal: 0 }}>
                <Text>User Selected Cleaning</Text>
                <View
                  style={{ borderBottomWidth: 1, borderBottomColor: "black" }}
                >
                  <Picker
                    selectedValue={this.state.selectedSubCat}
                    onValueChange={this.setSubCat}
                    style={{ height: 50, width: "100%" }}
                  >
                    <Picker.Item label="Plumbing Services:" value="" />
                    <Picker.Item
                      label="Plumbing Installation"
                      value=""
                      enabled={false}
                    />
                    <Picker.Item
                      label="Plumbing Repair"
                      value="Plumbing Repair"
                    />
                    <Picker.Item
                      label="Bidet Installation"
                      value="Bidet Installation"
                    />
                    <Picker.Item
                      label="Water Heater Installation"
                      value="Water Heater Installation"
                    />
                    <Picker.Item
                      label="Water Heater Repair"
                      value="Water Heater Repair"
                    />
                  </Picker>
                </View>
              </View>
            ) : null}

            {/* MOUNTING */}
            {this.state.selectedService === "Mounting" ? (
              <View style={{ marginTop: 50, paddingHorizontal: 0 }}>
                <Text>User Selected Mounting</Text>
                <View
                  style={{ borderBottomWidth: 1, borderBottomColor: "black" }}
                >
                  <Picker
                    selectedValue={this.state.selectedSubCat}
                    onValueChange={this.setSubCat}
                    style={{ height: 50, width: "100%" }}
                  >
                    <Picker.Item
                      label="Mounting Services:"
                      value=""
                      enabled={false}
                    />
                    <Picker.Item label="TV Mounting" value="TV Mounting" />
                    <Picker.Item
                      label="Aircon Installation"
                      value="Aircon Installation"
                    />
                  </Picker>
                </View>
              </View>
            ) : null}

            {/* ELECTRICAL */}
            {this.state.selectedService === "Electrical" ? (
              <View style={{ marginTop: 50, paddingHorizontal: 0 }}>
                <Text>User Selected Electrical</Text>
                <View
                  style={{ borderBottomWidth: 1, borderBottomColor: "black" }}
                >
                  <Picker
                    selectedValue={this.state.selectedSubCat}
                    onValueChange={this.setSubCat}
                    style={{ height: 50, width: "100%" }}
                  >
                    <Picker.Item
                      label="Electrical Services:"
                      value=""
                      enabled={false}
                    />
                    <Picker.Item label="Aircon Repair" value="Aircon Repair" />
                    <Picker.Item
                      label="Lighting Repair"
                      value="Lighting Repair"
                    />
                    <Picker.Item
                      label="Lighting Installation"
                      value="Lighting Installation"
                    />
                  </Picker>
                </View>
              </View>
            ) : null}

            {/* ERRAND */}
            {this.state.selectedService === "Errand" ? (
              <View style={{ marginTop: 50, paddingHorizontal: 0 }}>
                <Text>User Selected Errand</Text>
                <View
                  style={{ borderBottomWidth: 1, borderBottomColor: "black" }}
                >
                  <Picker
                    selectedValue={this.state.selectedSubCat}
                    onValueChange={this.setSubCat}
                    style={{ height: 50, width: "100%" }}
                  >
                    <Picker.Item
                      label="Errand Services:"
                      value=""
                      enabled={false}
                    />
                    <Picker.Item
                      label="Grocery Shopping"
                      value="Grocery Shopping"
                    />
                    <Picker.Item
                      label="Personal Shopping"
                      value="Personal Shopping"
                    />
                  </Picker>
                </View>
              </View>
            ) : null}
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 60,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              paddingVertical: 10,
              paddingHorizontal: 60,
              borderRadius: 10,
              position: "absolute",
              bottom: 30,
            }}
            onPress={() => {
              alert(this.state.selectedService);
              alert(this.state.selectedSubCat);

              let formData = new FormData();

              formData.append("category", this.arrayOfServices);
              // formData.append("lastname", lastname);

              fetch(
                "http://" + global.IPaddress + ":3000/worker/" + global.userID,
                {
                  method: "POST",
                  body: formData,
                  headers: {
                    "content-type": "multipart/form-data",
                  },
                }
              )
                .then(() => {
                  alert("Account created");
                  // props.navigation.navigate("LoginStack");
                })
                .catch((error) => {
                  console.log("All fields should be filled.");
                });
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Create Worker Account
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    color: "pink",
  },
});

export default Worker_ServiceOfferedSelection;
