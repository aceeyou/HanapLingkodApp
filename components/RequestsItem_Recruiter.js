import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

function RequestsItem_Recruiter(props) {
  return (
    <TouchableOpacity style={[styles.userBlocks, props.itemStatus == 3 ? styles.blockDenied : styles.blockPending]}>
      <View style={[styles.topContainer]}>
        <Image source={require("../assets/bedroom.jpg")} style={{width: 75, height: 75, borderRadius: 20, borderWidth: 2, borderColor: '#fff'}} />
        <View style={[styles.txtContainer]}>
          <View style={styles.rowView}>
            <Text style={[styles.text, styles.txtServiceCategory]}>{props.item.serviceCategory ? props.item.serviceCategory : "Service Category"}</Text>
            { props.itemStatus == 3 ? <TouchableOpacity style={{backgroundColor: '#1C2541', padding: 4, paddingVertical: 5, borderRadius: 3}}>
              <Image source={require("../assets/icons/trash-white.png")} style={{width: 15, height: 15}} />
            </TouchableOpacity> : null }
          </View>
          <Text style={[styles.text, styles.txtName]}>{props.item.workerId.firstname} {props.item.workerId.lastname}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require("../assets/icons/calendar-white.png")} style={{width: 20, height: 20, marginRight: 10,}} />
            <Text style={[styles.text, styles.txtSchedule]}>{props.item.schedule}</Text>
            <Image source={require("../assets/icons/clock-white.png")} style={{width: 20, height: 20, marginLeft: 15, marginRight: 10,}} />
            <Text style={[styles.text, styles.txtSchedule]}>{props.item.time}</Text>
          </View>
        </View>

      </View>
      
      { props.itemStatus == 1 ? 
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={[styles.bottomContainer]}>
            <Text style={[styles.text, styles.recruiterTxt]}>Waiting for the Worker's response</Text>
          </View>
          <TouchableOpacity style={{padding: 3, backgroundColor: '#fff', marginTop: 18, borderRadius: 20}} >
            <Image source={require('../assets/bedroom.jpg')} style={{width: 35, height: 35, borderRadius: 17}} />
          </TouchableOpacity>
      </View> :
      <View style={[styles.bottomContainer]}>
        <Text style={[styles.text, styles.recruiterTxt]}>Waiting for the Worker's response</Text>
      </View> }

    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  userBlocks: {
    padding: 18, 
    marginHorizontal: 20, 
    marginBottom: 18, 
    borderRadius: 10,
    backgroundColor: '#5bc0be',
    shadowColor: "#2B2525",
    elevation: 5,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  blockPending: {
    backgroundColor: "#5bc0be",
  },
  blockDenied: {
    backgroundColor: "#FF5353",
  },
  topContainer: {
    flexDirection: 'row',
  },
  bottomContainer: {
    marginTop: 18,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 18,
    alignItems: 'center',
    borderColor: '#C7BFBF',
  },
  txtContainer: {
    marginHorizontal: 15,
    width: '70%',
  },
  txtSchedule: {
    fontSize: 16,
    fontFamily: 'LexendDeca_Medium'
  },
  recruiterTxt: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'LexendDeca_Medium'
  },
  text: {
    color: "#fff",
    overflow: 'hidden',
  },
  txtServiceCategory: {
    // opacity: 0.5,
    fontSize: 15,
    fontFamily: "LexendDeca_SemiBold"
  },
  txtName: {
    fontSize: 20,
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

export default RequestsItem_Recruiter