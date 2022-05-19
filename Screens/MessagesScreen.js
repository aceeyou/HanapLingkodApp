import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import CustomHeader from "../components/CustomerHeader";

function MessagesScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <CustomHeader title="Chats" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            paddingVertical: 7,
            paddingHorizontal: 20,
            backgroundColor: "lightgray",
            color: "#000",
          }}
        >
          Comming Soon
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default MessagesScreen;
