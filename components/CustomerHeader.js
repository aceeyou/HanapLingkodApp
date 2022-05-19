import * as React from "react";
import { Text, View, Image, StatusBar, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import "../global/Global";

function CustomHeader(props) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 50,
        paddingTop: 20,
        paddingHorizontal: 30,
      }}
    >
      <View style={{ flex: 0.65, justifyContent: "center" }}>
        {props.isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{ width: 20, height: 20, marginLeft: 0 }}
              source={require("../assets/icons/hamburger.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: 25, height: 25, marginLeft: 3 }}
              source={require("../assets/icons/arrow-left.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 3, justifyContent: "center" }}>
        <Text
          style={{
            textAlign: "left",
            fontSize: 18,
            fontWeight: "700",
            color: "#0d0d0c",
          }}
        >
          {props.title}
        </Text>
      </View>

      {/* Profile Picture of user */}
      {/* Go to Profile page */}
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
      >
        {!props.isCreateAccount ? (
          <TouchableOpacity
            onPress={() => navigation.navigate("UserProfileScreen")}
          >
            {global.userProfilePic ? (
              <Image
                source={require("../assets/icons/user-filled.png")}
                style={{ width: 30, height: 30, borderRadius: 15 }}
              />
            ) : (
              <Image
                source={require("../assets/icons/user-outline.png")}
                style={{ width: 30, height: 30, borderRadius: 15 }}
              />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

export default CustomHeader;
