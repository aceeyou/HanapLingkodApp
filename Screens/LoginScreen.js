import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";

import { FloatingLabelInput } from "react-native-floating-label-input";
import "../global/Global";

import CustomHeader from "../components/CustomerHeader";

function LoginScreen({ navigation }) {
  // gets the value from the input box/textbox on the screen
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // shows and hides the text of the password input
  const [show, setShow] = useState(false);

  ref_passwInput = useRef();

  // fetch data from server/database
  const fetchUser = () => {
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
        console.log(data._id);
        global.userID = data._id;
        global.userRole = data.role;
        console.log(data.role);

        navigation.navigate("HomeApp");

        // if (global.userRole === recruiter) navigation.navigate("HomeApp");
        // else navigation.navigate("");
      })
      .catch((error) => {
        alert("Incorrect Credentials. Try again");
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 30,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          paddingVertical: 50,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            source={require("../assets/bg.png")}
            style={{ width: 120, height: 120, borderRadius: 60 }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              marginTop: 10,
              marginBottom: 6,
            }}
          >
            HanapLingkod
          </Text>
          <Text style={{ color: "darkgray" }}>#1🏆 App for Home Services</Text>
        </View>

        {/* TEXTBOX FOR USERNAME AND PASSWORD AS WELL AS A BUTTON FOR THE FORGOT PASSWORD */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: "5%",
            paddingVertical: 80,
          }}
        >
          <View style={{ marginBottom: 20 }}>
            <FloatingLabelInput
              label={"Username"}
              value={username}
              keyboarType="text"
              returnKeyType="next"
              onSubmitEditing={() => ref_passwInput.current.focus()}
              labelStyle={{ colorFocused: "#000" }}
              onChangeText={(value) => setUsername(value)}
              containerStyles={{
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: "darkgray",
              }}
              customLabelStyles={{
                colorBlurred: "black",
                colorFocused: "black",
                fontSizeFocused: 12,
              }}
              inputStyles={{ color: "black", paddingTop: 20 }}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <FloatingLabelInput
              label={"Password"}
              isPassword
              togglePassword={show}
              value={password}
              keyboarType="text"
              ref={ref_passwInput}
              onChangeText={(value) => setPassword(value)}
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
              customShowPasswordComponent={<Text>Show</Text>}
              customHidePasswordComponent={<Text>Hide</Text>}
              onSubmit={fetchUser}
            />
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => alert("forgot password😿")}>
              <Text style={{}}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SIGN IN & CREATE NEW ACCOUNT BUTTON */}
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {/* Login Button */}
          <TouchableOpacity style={styles.btn} onPress={fetchUser}>
            <Text
              style={{ color: "white", textAlign: "center", fontWeight: "700" }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("AccountTypeScreenCreate")}
          >
            <Text
              style={{ color: "white", textAlign: "center", fontWeight: "700" }}
            >
              Create an Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default LoginScreen;
