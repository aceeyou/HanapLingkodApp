import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import CustomHeader from "../components/CustomerHeader";

export default function EditUserProfile() {
  // gets the value from the input box/textbox on the screen
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [homeAdd, setHomeAdd] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");

  // const [image, setUri] = useState('');
  // shows and hides the text of the password input
  const [show, setShow] = useState(false);

  // select profile picture prompt
  const pickImage = () => {
    alert("hi");
  };

  const saveChanges = () => {
    alert("hi");
  };

  ref_username = useRef();
  ref_pass = useRef();
  ref_confirmPass = useRef();
  ref_fullname = useRef();
  ref_bday = useRef();
  ref_age = useRef();
  ref_gender = useRef();
  ref_homeAdd = useRef();
  ref_phoneNum = useRef();
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <ScrollView>
        <CustomHeader title="Edit Profile" isCreateAccount={true} />
        <View style={{ paddingHorizontal: 30 }}>
          {/* Profile Picture */}
          <View style={{ alignItems: "center", marginTop: 30 }}>
            {image ? (
              <Image
                source={require("../assets/bathroom.jpg")}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
            ) : (
              <Image
                source={require("../assets/icons/dp-placeholder.png")}
                style={{ width: 100, height: 100 }}
              />
            )}
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#242927",
                backfaceVisibility: "hidden",
                borderRadius: 15,
                position: "absolute",
                top: 70,
                left: 190,
              }}
            >
              <TouchableOpacity style={{}} onPress={() => pickImage()}>
                <Image
                  source={require("../assets/icons/edit.png")}
                  style={{
                    width: 22,
                    height: 22,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Edit Information */}
          <View
            style={{
              paddingHorizontal: 30,
              marginTop: 40,
            }}
          >
            <View style={{ marginBottom: 20 }}>
              {/* FULL NAME */}
              <View style={{ marginBottom: 20 }}>
                <FloatingLabelInput
                  label={"Full Name"}
                  value={fullname}
                  keyboardType="default"
                  returnKeyType="next"
                  onSubmitEditing={() => ref_homeAdd.current.focus()}
                  ref={ref_fullname}
                  labelStyle={{ colorFocused: "#000" }}
                  onChangeText={(value) => setFullname(value)}
                  containerStyles={{
                    borderWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: "darkgray",
                  }}
                  customLabelStyles={{
                    colorFocused: "black",
                    colorBlurred: "black",
                    fontSizeFocused: 12,
                  }}
                  inputStyles={{ color: "black", paddingTop: 20 }}
                />
              </View>

              {/* HOME ADDRESS */}
              <View style={{ marginBottom: 20 }}>
                <FloatingLabelInput
                  label={"Home Address"}
                  value={homeAdd}
                  keyboardType="default"
                  returnKeyType="next"
                  onSubmitEditing={() => ref_phoneNum.current.focus()}
                  ref={ref_homeAdd}
                  labelStyle={{ colorFocused: "#000" }}
                  onChangeText={(value) => setHomeAdd(value)}
                  containerStyles={{
                    borderWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: "darkgray",
                  }}
                  customLabelStyles={{
                    colorFocused: "black",
                    colorBlurred: "black",
                    fontSizeFocused: 12,
                  }}
                  inputStyles={{ color: "black", paddingTop: 20 }}
                />
              </View>

              {/* PHONE NUMBER */}
              <View style={{ marginBottom: 20 }}>
                <FloatingLabelInput
                  label={"Phone Number"}
                  value={phoneNumber}
                  mask="9999-999-9999"
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  onSubmitEditing={() => ref_gender.current.focus()}
                  ref={ref_phoneNum}
                  labelStyle={{ colorFocused: "#000" }}
                  onChangeText={(value) => setPhoneNumber(value)}
                  containerStyles={{
                    borderWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: "darkgray",
                  }}
                  customLabelStyles={{
                    colorFocused: "black",
                    colorBlurred: "black",
                    fontSizeFocused: 12,
                  }}
                  inputStyles={{ color: "black", paddingTop: 20 }}
                />
              </View>

              {/* SEX | GENDER */}
              <View style={{ flex: 1.3, width: "100%", marginBottom: 20 }}>
                <FloatingLabelInput
                  label={"Gender"}
                  value={gender}
                  keyboardType="default"
                  returnKeyType="next"
                  onSubmitEditing={() => ref_username.current.focus()}
                  ref={ref_gender}
                  labelStyle={{ colorFocused: "#000" }}
                  onChangeText={(value) => setGender(value)}
                  containerStyles={{
                    borderWidth: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: "darkgray",
                  }}
                  customLabelStyles={{
                    colorFocused: "black",
                    colorBlurred: "black",
                    fontSizeFocused: 12,
                  }}
                  inputStyles={{ color: "black", paddingTop: 20 }}
                />
              </View>

              {/* Username */}
              <FloatingLabelInput
                label={"Username"}
                value={username}
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={() => ref_pass.current.focus()}
                ref={ref_username}
                labelStyle={{ colorFocused: "#000" }}
                onChangeText={(value) => setUsername(value)}
                containerStyles={{
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: "darkgray",
                }}
                customLabelStyles={{
                  colorFocused: "black",
                  colorBlurred: "black",
                  fontSizeFocused: 12,
                }}
                inputStyles={{ color: "black", paddingTop: 20 }}
              />
            </View>

            {/* PASSWORD */}
            <View style={{ marginBottom: 20 }}>
              <FloatingLabelInput
                label={"Password"}
                isPassword
                togglePassword={show}
                value={password}
                ref={ref_pass}
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={() => ref_confirmPass.current.focus()}
                onChangeText={(value) => setPassword(value)}
                containerStyles={{
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: "darkgray",
                }}
                customLabelStyles={{
                  color: "black",
                  colorFocused: "black",
                  colorBlurred: "black",
                  fontSizeFocused: 12,
                }}
                inputStyles={{ color: "black", paddingTop: 20 }}
                customShowPasswordComponent={<Text>Show</Text>}
                customHidePasswordComponent={<Text>Hide</Text>}
                style={{ marginTop: 20 }}
              />
            </View>

            <View style={{ marginBottom: 20 }}>
              <FloatingLabelInput
                label={"Confirm Password"}
                isPassword
                togglePassword={show}
                value={confirmPassword}
                ref={ref_confirmPass}
                keyboardType="default"
                onChangeText={(value) => setConPassword(value)}
                containerStyles={{
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: "darkgray",
                }}
                customLabelStyles={{
                  color: "black",
                  colorFocused: "black",
                  colorBlurred: "black",
                  fontSizeFocused: 12,
                }}
                inputStyles={{ color: "black", paddingTop: 20 }}
                customShowPasswordComponent={<Text>Show</Text>}
                customHidePasswordComponent={<Text>Hide</Text>}
                style={{ marginTop: 20 }}
              />
            </View>
          </View>

          <View
            style={{ marginTop: 30, marginBottom: 80, alignItems: "center" }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 100,
                paddingVertical: 10,
                backgroundColor: "#0ec76e",
                borderRadius: 10,
              }}
              onPress={() => saveChanges()}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
                Save Changes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
