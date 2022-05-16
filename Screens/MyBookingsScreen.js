import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import BookingsItem from "../components/BookingsItem";
import CustomHeader from "../components/CustomerHeader";
import RequestsItem from "../components/RequestsItem";

function MyBookingsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <ScrollView>
        <CustomHeader title="My Bookings" navigation={navigation} />
        <View style={{ flex: 1, paddingHorizontal: 30, paddingBottom: 80 }}>
          <Text style={{ marginTop: 30, marginLeft: 20, fontSize: 16 }}>
            Below are the list of bookings
          </Text>

          <BookingsItem
            id={123}
            service="Deep Cleaning"
            category="Bathroom"
            date="11 September, 11:11AM"
            worker="Narda D. Custodio"
            address="Awitan, Daet"
            priceRange="P1100 - P2600"
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyBookingsScreen;
