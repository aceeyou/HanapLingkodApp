import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import CustomHeader from "../components/CustomerHeader";
import DisplayWorkers from "../components/DisplayWorkers";

function ListOfWorkers({ navigation }) {
  const route = useRoute();
  // use route.params.title to know which services to display

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CustomHeader title="Available Workers" navigation={navigation} />

        <Text style={styles.txtHeader}>
          Below are the list of workers for {route.params.category} services
        </Text>
        <View style={styles.viewContainer}>
          <DisplayWorkers
            title="something"
            category="category chosen by worker"
            priceRange="1000 (price range of worker)"
            avgWT="4 - 5hours (avgWT by the worker)"
            dp={require("../assets/bg.png")}
            navigation={navigation}
          />
          <DisplayWorkers
            title="something"
            category="category chosen by worker"
            priceRange="1000 (price range of worker)"
            avgWT="4 - 5hours (avgWT by the worker)"
            dp={require("../assets/bg2.png")}
            navigation={navigation}
          />
          <DisplayWorkers
            title="something"
            category="category chosen by worker"
            priceRange="1000 (price range of worker)"
            avgWT="4 - 5hours (avgWT by the worker)"
            dp={require("../assets/bg.png")}
            navigation={navigation}
          />
          <DisplayWorkers
            title="something"
            category="category chosen by worker"
            priceRange="1000 (price range of worker)"
            avgWT="4 - 5hours (avgWT by the worker)"
            dp={require("../assets/bg.png")}
            navigation={navigation}
          />
          <DisplayWorkers
            title="something"
            category="category chosen by worker"
            priceRange="1000 (price range of worker)"
            avgWT="4 - 5hours (avgWT by the worker)"
            dp={require("../assets/bg2.png")}
            navigation={navigation}
          />
          <DisplayWorkers
            title="something"
            category="category chosen by worker"
            priceRange="1000 (price range of worker)"
            avgWT="4 - 5hours (avgWT by the worker)"
            dp={require("../assets/bg.png")}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  viewContainer: {
    paddingHorizontal: 30,
    marginTop: 30,
    marginBottom: 50,
  },
  txtHeader: {
    paddingHorizontal: 50,
    marginTop: 30,
    fontSize: 15,
  },
});

export default ListOfWorkers;