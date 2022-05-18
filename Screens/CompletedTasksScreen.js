import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "../components/CustomerHeader";
import { useNavigation } from "@react-navigation/native";
import "../global/Global";

// fetch data here

// const Item = (item, { title, image }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{item.title}</Text>
//     <Image source={image} style={styles.img} />
//   </View>
// );

export default class CompletedTasksScreen extends React.Component {
  // const renderItem = ({ item }) => <Item title={item.title} />;
  // const navigation = useNavigation();

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     componentMount();
  //     //Put your Data loading function here instead of my loadData()
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      data: [],
    };
  }

  goRefresh() {
    this.focusListener = this.props.navigation.addListener("focus", () => {
      this.componentMount();
    });
  }

  componentMount() {
    fetch("http://" + global.IPaddress + ":3000/completed/" + global.userID, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoaded: false,
          data: responseJson,
        });
        console.log(responseJson);
        // global.requestCount = this.state.data.length;
        // console.log("len: ", this.state.data.length);
        // console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
        return;
      });

    console.log("finished loading");
  }

  render() {
    let { data } = this.state;

    return (
      <SafeAreaView
        style={{ marginTop: StatusBar.currentHeight, paddingBottom: 100 }}
      >
        {this.goRefresh()}
        {this.state.isLoaded ? this.componentMount() : null}
        <CustomHeader title="Completed Tasks" />
        <Text style={{ fontSize: 15, marginLeft: 50, paddingVertical: 20 }}>
          Below are the list of Completed Tasks
        </Text>
        <View style={{ Flex: 1, paddingBottom: 100 }}>
          <FlatList
            extraData={data}
            // ListHeaderComponent={<View style={{ height: 200 }} />}
            ListFooterComponent={<View style={{ height: 100 }} />}
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View
                style={{
                  // paddingHorizontal: 30,
                  // paddingVertical: 15,
                  marginHorizontal: 30,
                  marginTop: 15,
                  borderRadius: 6,
                  backgroundColor: "#dddcdc",
                }}
              >
                <TouchableOpacity>
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: "row",
                      padding: 15,
                      paddingBottom: 0,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#5bc0be",
                        borderRadius: 30,
                        width: 60,
                        height: 60,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        source={require("../assets/bg.png")}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 30,
                        }}
                      />
                    </View>
                    {global.userRole === "recruiter" ? (
                      <View style={[styles.nameBlock]}>
                        <Text style={[styles.txtDark, styles.nameTxt]}>
                          {item.requestId.workerId.firstname}{" "}
                          {item.requestId.workerId.lastname}
                        </Text>
                        <Text style={[styles.txtDark]}>
                          Service: {item.requestId.serviceCategory}
                        </Text>
                      </View>
                    ) : (
                      <View style={[styles.nameBlock]}>
                        <Text style={[styles.txtDark, styles.nameTxt]}>
                          {item.requestId.recuiterId.firstname}{" "}
                          {item.requestId.recuiterId.lastname}
                        </Text>
                        <Text style={[styles.txtDark]}>
                          Service: {item.requestId.serviceCategory}
                        </Text>
                      </View>
                    )}
                  </View>
                  <View style={{ paddingHorizontal: 25, marginTop: 7 }}>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={[styles.txtDark]}>Recruiter address:</Text>
                      <Text
                        numberOfLines={3}
                        style={[styles.txtDark, styles.nameTxt]}
                      >
                        {item.requestId.location}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      paddingHorizontal: 25,
                      justifyContent: "flex-start",
                      flexDirection: "row",
                    }}
                  >
                    <View style={{ marginBottom: 0 }}>
                      <Text style={{ marginBottom: 7 }}>Date and Time: </Text>
                      <Text style={[styles.txtDark, styles.schedTxt]}>
                        {item.requestId.schedule}, {item.requestId.time}
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text></Text>
                    </View>
                  </View>

                  {/* <View>
                <Text>Comment</Text>
                </View> */}
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  txtheader: {
    paddingVertical: 40,
    paddingHorizontal: 50,
    fontSize: 18,
  },
  item: {
    backgroundColor: "#DDDCDC",
    height: 145,
    width: "100%",
    borderRadius: 6,
    marginBottom: 15,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  title: {},
  img: {
    width: "100%",
    height: "100%",
    backgroundColor: "pink",
  },
  flatlistContainer: {
    paddingHorizontal: 30,
    paddingTop: 10,
    marginBottom: 50,
    paddingBottom: 50,
  },
  txtDark: {
    color: "#0b132b",
  },
  txtWhite: {
    color: "#fff",
    fontWeight: "bold",
  },
  nameBlock: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  nameTxt: {
    fontSize: 16,
    fontWeight: "bold",
  },
  schedTxt: {
    fontSize: 16,
    fontWeight: "bold",
    // backgroundColor: "#fff",
    // paddingHorizontal: 15,
    // paddingVertical: 7,
    borderRadius: 30,
    textAlign: "left",
    color: "#0b132b",
    marginBottom: 20,
  },
});
