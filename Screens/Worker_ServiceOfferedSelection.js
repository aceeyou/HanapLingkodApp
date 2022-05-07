import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustomHeader from "../components/CustomerHeader";

import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

class Worker_ServiceOfferedSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
    };
  }

  updateUser = (user) => {
    this.setState({ user: user });
    this.arrayOfServices.push(user);
    console.log(this.arrayOfServices);
  };

  display = () => {
    return this.arrayOfServices.map((item) => {
      return <Text>{this.state.user}</Text>;
    });
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

  arrayOfServices = [];
  render() {
    return (
      <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
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
        <View style={{ marginTop: 50, paddingHorizontal: 40 }}>
          <View style={{ borderBottomWidth: 1, borderBottomColor: "black" }}>
            <Picker
              selectedValue={this.state.user}
              onValueChange={this.updateUser}
              style={{ height: 50, width: "100%" }}
            >
              <Picker.Item label="Service Offered" value="" enabled={false} />
              <Picker.Item label="Errand" value="Errand" />
              <Picker.Item label="Mounting" value="Mounting" />
              <Picker.Item label="Plumbing" value="Plumbing" />
              <Picker.Item label="General" value="General" />
              <Picker.Item label="Electrical" value="Electrical" />
              <Picker.Item label="Cleaning" value="Cleaning" />
            </Picker>
          </View>

          <View
            style={{
              alignItems: "flex-start",
              marginTop: 8,
            }}
          >
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              refreshing
              extraData={this.state.refresh}
              data={this.arrayOfServices}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItem}
            />
          </View>

          {/* <View
                        style={{
                            flex: 1,
                            backgroundColor: "pink",
                            width: "100%",
                            height: 200,
                        }}
                        >
                        {this.display}
                        </View> */}

          {/* <View>
                        {this.state.user ? arrayOfServices.push(this.state.user) : null}
                        {arrayOfServices.map((item) => (
                            <Text>{item}</Text>
                        ))}
                        </View> */}
          {/* <Text style={styles.next}>{this.arrayOfServices}</Text> */}
          {/* {console.log(arrayOfServices)} */}
        </View>

        <View>
          {/* shows another dropdown when the user selected something */}
          {this.state.user === "Cleaning" ? (
            <View style={{ marginTop: 50, paddingHorizontal: 40 }}>
              <Text>User Selected Cleaning</Text>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "black" }}
              >
                <Picker
                  selectedValue={this.state.user}
                  onValueChange={this.updateUser}
                  style={{ height: 50, width: "100%" }}
                >
                  <Picker.Item
                    label="Cleaning Services"
                    value=""
                    enabled={false}
                  />
                  <Picker.Item label="General" value="General" />
                  <Picker.Item label="Bedroom Cleaning" value="Bedroom" />
                  <Picker.Item label="Deep Cleaning" value="DeepClean" />
                  <Picker.Item label="Aircon Cleaning" value="Aircon" />
                  <Picker.Item label="Cleaning" value="Cleaning" />
                </Picker>
              </View>
            </View>
          ) : null}

          {this.state.user === "General" ? (
            <View style={{ marginTop: 50, paddingHorizontal: 40 }}>
              <Text>User Selected General Cleaning</Text>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "black" }}
              >
                <Text>How much</Text>
              </View>
            </View>
          ) : null}
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
