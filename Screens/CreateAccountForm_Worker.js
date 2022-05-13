import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";

import { FloatingLabelInput } from "react-native-floating-label-input";
import "../global/Global";

import CustomHeader from "../components/CustomerHeader";
import ImageUploadButton from "../components/ImageUploadButton";

function CreateAccountForm_Worker(props, { navigation }) {
  // gets the value from the input box/textbox on the screen
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [homeAdd, setHomeAdd] = useState("");
  const [workAdd, setWorkAdd] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  // shows and hides the text of the password input
  const [show, setShow] = useState(false);

  ref_username = useRef();
  ref_pass = useRef();
  ref_firstname = useRef();
  ref_lastname = useRef();
  ref_bday = useRef();
  ref_age = useRef();
  ref_gender = useRef();
  ref_homeAdd = useRef();
  ref_workAdd = useRef();
  ref_phoneNum = useRef();
  ref_confirmpass = useRef();

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <ScrollView style={{}}>
        <CustomHeader title="" navigation={navigation} isCreateAccount={true} />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            paddingHorizontal: 30,
            paddingTop: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 23,
              fontWeight: "700",
              marginBottom: 0,
            }}
          >
            Worker Information
          </Text>

          {/* TEXTBOX FOR USER INFORMATION */}
          <View
            style={{
              width: "100%",
              paddingHorizontal: "5%",
              paddingVertical: 40,
            }}
          >
            {/* FIRST NAME */}
            <View style={{ marginBottom: 20 }}>
              <FloatingLabelInput
                label={"First Name"}
                value={firstname}
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={() => ref_lastname.current.focus()}
                ref={ref_firstname}
                labelStyle={{ colorFocused: "#000" }}
                onChangeText={(value) => setFirstname(value)}
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

            {/* LAST NAME */}
            <View style={{ marginBottom: 20 }}>
              <FloatingLabelInput
                label={"Last Name"}
                value={lastname}
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={() => ref_bday.current.focus()}
                ref={ref_lastname}
                labelStyle={{ colorFocused: "#000" }}
                onChangeText={(value) => setLastname(value)}
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

            {/* BIRTHDATE */}
            <View
              style={{ flexDirection: "row", width: "100%", marginBottom: 20 }}
            >
              <View style={{ flex: 2.5, width: "100%", marginRight: 8 }}>
                <FloatingLabelInput
                  label={"Birthday"}
                  value={birthdate}
                  mask="99/99/9999"
                  keyboardType="numeric"
                  hint="01/01/1900"
                  returnKeyType="next"
                  onSubmitEditing={() => ref_age.current.focus()}
                  ref={ref_bday}
                  labelStyle={{ colorFocused: "#000" }}
                  onChangeText={(value) => setbirthdate(value)}
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

              {/* AGE */}
              <View style={{ flex: 1, width: "100%", marginRight: 8 }}>
                <FloatingLabelInput
                  label={"Age"}
                  value={age}
                  mask="999"
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => ref_gender.current.focus()}
                  ref={ref_age}
                  labelStyle={{ colorFocused: "#000" }}
                  onChangeText={(value) => setAge(value)}
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
              <View style={{ flex: 1.3, width: "100%" }}>
                <FloatingLabelInput
                  label={"Gender"}
                  value={gender}
                  keyboardType="default"
                  returnKeyType="next"
                  onSubmitEditing={() => ref_homeAdd.current.focus()}
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
            </View>

            {/* HOME ADDRESS */}
            <View style={{ marginBottom: 20 }}>
              <FloatingLabelInput
                label={"Home Address"}
                value={homeAdd}
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={() => ref_workAdd.current.focus()}
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

            {/* WORK ADDRESS */}
            <View style={{ marginBottom: 20 }}>
              <FloatingLabelInput
                label={"Work Address"}
                value={workAdd}
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={() => ref_phoneNum.current.focus()}
                ref={ref_workAdd}
                labelStyle={{ colorFocused: "#000" }}
                onChangeText={(value) => setWorkAdd(value)}
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
                onSubmitEditing={() => ref_username.current.focus()}
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

            {/* TEXTBOX FOR USERNAME */}
            <View style={{ marginBottom: 20 }}>
              <FloatingLabelInput
                label={"Username"}
                autoCapitalize="none"
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
                autoCapitalize="none"
                value={password}
                ref={ref_pass}
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={() => ref_confirmpass.current.focus()}
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

            {/* CONFIRM PASSWORD */}
            <View style={{ marginBottom: 20 }}>
              <FloatingLabelInput
                label={"Confirm Password"}
                isPassword
                togglePassword={show}
                autoCapitalize="none"
                value={confirmpassword}
                ref={ref_confirmpass}
                keyboardType="default"
                returnKeyType="submit"
                onChangeText={(value) => setConfirmPassword(value)}
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

            {/* BUTTON FOR PHOTO ATTACHMENTS */}
            <View style={{ marginTop: 15 }}>
              <Text>License / Certificates (Optional):</Text>
              {/* <TouchableOpacity style={{backgroundColor: '#c4c4c4', paddingVertical: 8, alignItems: 'center', marginTop: 15, borderRadius: 5}}>
                            <Text style={{fontWeight: '700'}}>Attach photos here</Text>
                        </TouchableOpacity> */}
              <ImageUploadButton changeWord={(image) => setImage(image)} />
            </View>
            {image ? (
              <View
                style={{
                  paddingHorizontal: 30,
                  paddingTop: 20,
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: image }}
                  style={{ width: 350, height: 350 }}
                />
              </View>
            ) : null}
          </View>

          {/* Create account button */}
          <View
            style={{
              marginBottom: 50,
              marginTop: 20,
              width: "100%",
              paddingHorizontal: 10,
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: "#338CF4",
                paddingVertical: 10,
                borderRadius: 10,
                alignItems: "center",
              }}
              onPress={() => {
                let localUri = image;
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

                formData.append("firstname", firstname);
                formData.append("lastname", lastname);
                formData.append("birthday", birthdate);
                formData.append("age", age);
                formData.append("sex", gender);
                formData.append("address", homeAdd);
                formData.append("workAddress", workAdd);
                formData.append("phoneNumber", phoneNumber);
                formData.append("username", username);
                formData.append("password", password);
                formData.append("GovId", filename);

                fetch("http://" + global.IPaddress + ":3000/signup/worker", {
                  method: "POST",
                  body: formData,
                  headers: {
                    "content-type": "multipart/form-data",
                  },
                })
                  .then(() => {
                    alert("Account created");

                    fetch("http://" + global.IPaddress + ":3000/login", {
                      method: "POST",
                      body: JSON.stringify({
                        username: username,
                        password: password,
                      }),
                      headers: {
                        "content-type": "application/json",
                      },
                    })
                      .then((response) => response.json())
                      .then((data) => {
                        console.log("new account: ", data._id);
                        global.userID = data._id;
                        console.log(global.userID);

                        // navigation.navigate("HomeApp");
                        props.navigation.navigate("CAF_Worker_ServiceSelect");
                      })
                      .catch((error) => {
                        alert("Incorrect Credentials. Try again");
                      });
                  })
                  .catch((error) => {
                    console.log("All fields should be filled.");
                  });
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          {/* Hid the service type screen */}
          {/* SIGN IN & CREATE NEW ACCOUNT BUTTON */}
          {/* <View
            style={{
              width: "100%",
              alignItems: "flex-end",
              padding: 0,
              marginBottom: 50,
              paddingRight: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => createWorkerAccount}
              style={{ width: 100, padding: 10, flexDirection: "row" }}
            >
              <Text
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "700",
                  borderBottomWidth: 0.7,
                }}
              >
                Next Page
              </Text>
              <Image
                source={require("../assets/icons/arrow-right.png")}
                style={{ width: 20, height: 20, marginHorizontal: 8 }}
              />
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#338CF4",
    padding: 10,
    width: "90%",
    marginBottom: 20,
    borderRadius: 6,
  },
});

export default CreateAccountForm_Worker;
