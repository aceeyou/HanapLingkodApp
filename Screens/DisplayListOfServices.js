import { useRoute } from "@react-navigation/native";
import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import CustomHeader from "../components/CustomerHeader";
import DisplayServices_ListItem from "../components/DisplayServices_ListItem";

function DisplayListOfServices(props, { navigation }) {
  // get parameters from previoues route. example title

  // get the data

  const route = useRoute();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#fafafa",
      }}
    >
      <ScrollView>
        <CustomHeader title={route.params.title} navigation={navigation} />
        {/* CLEANING SERVICES */}
        {route.params.title === "Cleaning" ? (
          <View
            style={{
              // justifyContent: "center",
              // alignItems: "center",
              padding: 30,
            }}
          >
            <Text style={{ marginLeft: 20, marginBottom: 10, fontSize: 15 }}>
              Below are services associated with Cleaning
            </Text>
            <DisplayServices_ListItem
              title="House Cleaning"
              category="Cleaning"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://media.istockphoto.com/photos/new-modern-living-room-with-kitchen-new-home-interior-photography-picture-id1031043754?k=20&m=1031043754&s=612x612&w=0&h=YH-fz0uS4ehW8WhTglUkS4eohtv9_KILyRTDm_1hPkc=",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Carpet Cleaning"
              category="Cleaning"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://media.angi.com/s3fs-public/carpet-cleaner-removing-dirt.jpg",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Disinfection Cleaning"
              category="Cleaning"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://www.dalworth.com/images/disinfecting-service/disinfecting-solutions-image.jpg",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Aircon Cleaning"
              category="Cleaning"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://smileservelive.arcadier.io/images/categories/aircon-cleaning-80ax4ulb7wd8msn720lpma5dp.jpg",
              }}
              navigation={props.navigation}
            />
          </View>
        ) : null}

        {/* PLUMBING SERVICES */}
        {route.params.title === "Plumbing" ? (
          <View
            style={{
              // justifyContent: "center",
              // alignItems: "center",
              padding: 30,
            }}
          >
            <Text style={{ marginLeft: 20, marginBottom: 10, fontSize: 15 }}>
              Below are services associated with Plumbing
            </Text>
            <DisplayServices_ListItem
              title="Plumbing Installation"
              category="Plumbing"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://www.build-review.com/wp-content/uploads/2021/03/Plumbing.jpg",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Plumbing Repair"
              category="Plumbing"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://www.quality-plumbing.com/wp-content/uploads/2021/09/header-bg-2.jpg",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Bidet Installation"
              category="Plumbing"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://spartan-plumbing.com/wp-content/uploads/2020/05/what-the-crap-is-a-bidet.jpg",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Water Heater Installation"
              category="Plumbing"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/water-heater-installation-basics-2022-hero.jpg",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Water Heater Repair"
              category="Plumbing"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://www.713hotwater.com/site/wp-content/uploads/117136147_s-e1605903968103.jpg",
              }}
              navigation={props.navigation}
            />
          </View>
        ) : null}

        {/* MOUNTING SERVICES */}
        {route.params.title === "Mounting" ? (
          <View
            style={{
              // justifyContent: "center",
              // alignItems: "center",
              padding: 30,
            }}
          >
            <Text style={{ marginLeft: 20, marginBottom: 10, fontSize: 15 }}>
              Below are services associated with Mounting
            </Text>
            <DisplayServices_ListItem
              title="TV Mounting"
              category="Mounting"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://cdn.shopify.com/s/files/1/0051/3674/4566/articles/How-to-Choose-a-TV-Mount.jpg?v=1567190854",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Aircon Installation"
              category="Mounting"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://mydecorative.com/wp-content/uploads/2017/08/Air-Conditioning-Installation.jpg",
              }}
              navigation={props.navigation}
            />
          </View>
        ) : null}

        {/* ELECTRICAL SERVICES */}
        {route.params.title === "Electrical" ? (
          <View
            style={{
              // justifyContent: "center",
              // alignItems: "center",
              padding: 30,
            }}
          >
            <Text style={{ marginLeft: 20, marginBottom: 10, fontSize: 15 }}>
              Below are services associated with Electrical
            </Text>
            <DisplayServices_ListItem
              title="Aircon Repair"
              category="Electrical"
              priceRange="P700 - P1200"
              avgWT=" 3 - 10 hours"
              image={{
                uri: "https://www.kbe.com.sg/wp-content/uploads/2017/01/DSCF2118-e1494568451651.jpg",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Lighting Repair"
              category="Electrical"
              priceRange="P300 - P700"
              avgWT=" 1 - 3 hours"
              image={{
                uri: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/12/4/1/Orig-Jalynn-Baker_Home-Remedies-Light-Fixture-05.jpg.rend.hgtvcom.616.462.suffix/1575486868781.jpeg",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Lighting Installation"
              category="Electrical"
              priceRange="P300 - P700"
              avgWT=" 1 - 3 hours"
              image={{
                uri: "https://media.istockphoto.com/photos/electrician-man-worker-installing-ceiling-lamp-picture-id1263134450?k=20&m=1263134450&s=612x612&w=0&h=8SgqXRL-ZVyc5H30gPwGEkejwrlxl3_JjWNKQ5S3Wb8=",
              }}
              navigation={props.navigation}
            />
          </View>
        ) : null}

        {/* GENERAL SERVICES */}
        {route.params.title === "General" ? (
          <View
            style={{
              // justifyContent: "center",
              // alignItems: "center",
              padding: 30,
            }}
          >
            <Text style={{ marginLeft: 20, marginBottom: 10, fontSize: 15 }}>
              Below are services associated with General
            </Text>
            <DisplayServices_ListItem
              title="Grocery Shopping"
              category="General"
              priceRange="P300 - P700"
              avgWT=" 1 - 3 hours"
              image={{
                uri: "https://imageio.forbes.com/specials-images/imageserve/5f8ceed2e11880c542eca6b1/Woman-shopping-at-the-grocery-store-wearing-a-facemask/960x0.jpg?fit=bounds&format=jpg&width=960",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Personal Shopping"
              category="General"
              priceRange="P300 - P700"
              avgWT=" 3 - 4 hours"
              image={{
                uri: "https://www.face2face-marketing.com/wordpress/wp-content/uploads/2020/06/Shoppers-Marketing-News.jpg",
              }}
              navigation={props.navigation}
            />
          </View>
        ) : null}

        {/* APPLIANCES SERVICES */}
        {route.params.title === "Appliances" ? (
          <View
            style={{
              // justifyContent: "center",
              // alignItems: "center",
              padding: 30,
            }}
          >
            <Text style={{ marginLeft: 20, marginBottom: 10, fontSize: 15 }}>
              Below are services associated with Appliances
            </Text>
            <DisplayServices_ListItem
              title="Washing Machine Repair"
              category="Appliances"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://media.istockphoto.com/photos/choosing-the-right-tool-plumber-repairing-washing-machine-picture-id1170038003?k=20&m=1170038003&s=612x612&w=0&h=yZC-w0DxDFyw1XWEnsIc16sYyOue0dnjG8lO-bevOW4=",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="Refrigerator Repair"
              category="Appliances"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://gulfcoastappliances.com/wp-content/uploads/2018/08/Refrigerator-Repair-1200x675.jpeg",
              }}
              navigation={props.navigation}
            />
            <DisplayServices_ListItem
              title="TV Power Repair"
              category="Appliances"
              priceRange="P300 - P700"
              avgWT=" 3 - 6 hours"
              image={{
                uri: "https://thumbs.dreamstime.com/b/professional-repair-engineer-repairing-broken-tv-177532491.jpg",
              }}
              navigation={props.navigation}
            />
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DisplayListOfServices;
