import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

function RequestsItem_Worker(props) {
  return (
    <View style={styles.userBlocks}>
      <View style={[styles.topContainer]}>
        <Image source={require("../assets/bedroom.jpg")} style={{width: 75, height: 75, borderRadius: 20, borderWidth: 2, borderColor: '#fff'}} />
        <View style={[styles.txtContainer]}>
          <Text style={[styles.text, styles.txtServiceCategory]}>{props.item.serviceCategory ? props.item.serviceCategory : "Service Category"}</Text>
          <Text style={[styles.text, styles.txtName]}>{props.item.recuiterId.firstname} {props.item.recuiterId.lastname}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require("../assets/icons/calendar.png")} style={{width: 20, height: 20, marginRight: 10,}} />
            <Text style={[styles.text, styles.txtSchedule]}>{props.item.schedule}</Text>
            <Image source={require("../assets/icons/clock.png")} style={{width: 20, height: 20, marginLeft: 15, marginRight: 10,}} />
            <Text style={[styles.text, styles.txtSchedule]}>{props.item.time}</Text>
          </View>
        </View>

      </View>
      <View>
        <TouchableOpacity style={[styles.bottomContainer]}>
            <Text style={[styles.text, styles.recruiterTxt]}>View Request</Text>
            <Image source={require('../assets/icons/arrow-right.png')} />
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  userBlocks: {
    padding: 14, 
    marginHorizontal: 20, 
    marginBottom: 18, 
    borderRadius: 10,
    backgroundColor: '#f3f3f3',
    shadowColor: "#2B2525",
    elevation: 5,
  },
  topContainer: {
    flexDirection: 'row',
  },
  bottomContainer: {
    flexDirection: 'row',
    width: 175,
    marginTop: 12,
    marginLeft: 90,
    paddingVertical: 3,
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 18,
    alignItems: 'flex-start',
    borderColor: '#C7BFBF',
  },
  txtContainer: {
    marginHorizontal: 15,
    width: '70%',
  },
  txtSchedule: {
    fontSize: 16,
    fontFamily: 'LexendDeca_Medium',
    color: '#2080ff',
  },
  recruiterTxt: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'LexendDeca_Medium',
    paddingRight: 20,
  },
  text: {
    color: "#000",
    overflow: 'hidden',
  },
  txtServiceCategory: {
    // opacity: 0.5,
    fontSize: 15,
    fontFamily: "LexendDeca_SemiBold"
  },
  txtName: {
    fontSize: 18,
    fontFamily: "LexendDeca_Medium",
    marginVertical: 2,
  },
  addressBlock: {
    display: 'flex',
    flexDirection: 'row',
    width: 230,
    alignItems: 'center',
    overflow: 'hidden'
  },
  txtAddress: {
    marginTop: 2,
    fontSize: 16,
    fontFamily: "LexendDeca_Regular",
    overflow: 'hidden',
  },
  txtFeeRange: {
    marginTop: 3,
    fontSize: 13,
    fontFamily: "LexendDeca_Regular"
  },
})

export default RequestsItem_Worker