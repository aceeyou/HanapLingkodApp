import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import CategoryButton from '../components/CategoryButton';
import CustomHeader from '../components/CustomerHeader';


// needs to be a class to use the Component

// export default class HomeClass extends React.Component{

//     // const { useState, setState } = 

//     render(){
//         return(
//             <View>
//                 <Text>Hi!</Text>
//             </View>
//         );
//     }
// }

function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CustomHeader title="Home" isHome={true} navigation={navigation}/>
                <Text style={{fontSize:22, fontWeight: '700', paddingHorizontal: 36, marginTop: 36}}>Welcome, Recruiter!</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={[styles.btnItem, styles.btnRequests]}>
                        <Text style={styles.btnText}>Requests (2)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnItem, styles.btnBookings]}>
                        <Text style={styles.btnText}>Bookings (1)</Text>
                    </TouchableOpacity>
                </View>

                {/* Button for every category of avialable jobs */}
                <View style={styles.categoryContainer}>
                    <CategoryButton categoryImage={require('../assets/icons/Janitor.png')} title="Cleaning" navigation={navigation} />
                    <CategoryButton categoryImage={require('../assets/icons/Drill.png')} title="Mounting" navigation={navigation}/>
                    <CategoryButton categoryImage={require('../assets/icons/Plumbing.png')} title="Plumbing" navigation={navigation}/>
                    <CategoryButton categoryImage={require('../assets/icons/Electrical.png')} title="Electrical" navigation={navigation}/>
                    <CategoryButton categoryImage={require('../assets/icons/Maintenance.png')} title="General" navigation={navigation}/>
                    <CategoryButton categoryImage={require('../assets/icons/Inspection.png')} title="Errand" navigation={navigation}/>
                    <CategoryButton categoryImage={require('../assets/icons/Plumbing.png')} title="Plumbing" navigation={navigation}/>
                    <CategoryButton categoryImage={require('../assets/icons/Janitor.png')} title="Cleaning" navigation={navigation}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container:{
      flex: 1, 
      // alignItems: 'center', 
      // justifyContent: 'center',
      // paddingVertical: 25,
      marginTop: StatusBar.currentHeight,
      backgroundColor:'#fff',
  },
  pageTitle:{
      fontSize: 20,
      fontWeight: '700',
      color: '#292c30'
  },
  btnContainer:{
      flexDirection:'row',
      // justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 36,
      marginVertical: 30,
  },
  btnItem:{
      flex: 1,
      backgroundColor: '#DDDCDC',
      padding: 10,
      height: 40,
      margin: 5,
      alignItems: 'center',
      borderRadius: 6,
  },
  btnRequests:{
      marginRight: 11,
  },
  btnBookings:{
      marginLeft: 11,
  },
  btnText:{
      fontSize: 15, 
      fontWeight: '700',
  },
  categoryContainer:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      padding: 40,
      borderRadius: 30,
      backgroundColor: '#F8F3F3'
  },
});


export default HomeScreen;