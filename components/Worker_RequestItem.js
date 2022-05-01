import * as React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

function Worker_RequestItem({navigation}) {
    return (
        <View style={styles.container}>
           <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <View>
                   <Image source={require('../assets/bg.png')} style={{width: 50, height: 50, borderRadius: 25}} />
               </View>
               <View style={{paddingLeft: 20}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', marginBottom: 3, color: '#0d0d0c'}}>Leah O. Medina</Text>
                    <Text style={{fontSize: 16,}}>Awitan, Daet</Text>
               </View>
           </View>
           <View style={{paddingVertical: 20}}>
               <Text style={{fontWeight: 'bold', fontSize: 17}}>Deep Cleaning</Text>
               <Text style={{fontSize: 13}}>Bedroom</Text>
               <Text style={{paddingVertical: 10, color: '#0d0d0c', fontWeight: 'bold', fontSize: 16}}>11 September, 11:11AM</Text>
               <View>
                   <Text>Recruiter Rating</Text>
                   <View style={{flexDirection: 'row', marginTop: 2, marginBottom: 10}}>
                    <Image source={require('../assets/icons/star-filled.png')} style={{width: 18, height: 18, marginRight: 3}} />
                    <Image source={require('../assets/icons/star-filled.png')} style={{width: 18, height: 18, marginRight: 3}} />
                    <Image source={require('../assets/icons/star-filled.png')} style={{width: 18, height: 18, marginRight: 3}} />
                    <Image source={require('../assets/icons/star-filled.png')} style={{width: 18, height: 18, marginRight: 3}} />
                    <Image source={require('../assets/icons/star-filled.png')} style={{width: 18, height: 18, marginRight: 3}} />
                   </View>
               </View>
               <Text>Home Address</Text>           
               <Text style={{marginTop: 2, lineHeight: 20}}>1234 Example Street, Barangay, Daet, Camerines Norte | Near Camarines Norte State University</Text>
               {/* <Text style={styles.des_textlight}>Price Range: P1000 - P2500</Text>
               <Text style={styles.des_textlight}>Avg. Working Hours: 4 - 10 hours</Text> */}
           </View>
           <View style={{flexDirection: 'row'}}>
               <TouchableOpacity style={[styles.btn, styles.btn_accept]}>
                    <Text style={styles.btn_txt}>Accept</Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles.btn, styles.btn_reject]}>
                   <Text style={styles.btn_txt}>Reject</Text>
               </TouchableOpacity>

           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#e3e3e3',
        padding: 20,
        borderRadius: 8
    },
    btn:{
        flex: 1,
        padding: 8,
        borderRadius: 7,
        backgroundColor: 'gray',
        alignItems: 'center'
    },
    btn_accept: {
        backgroundColor: '#1AD77C',
        marginRight: 15,
    },
    btn_reject:{
        backgroundColor: '#EF5252'
    },
    btn_txt:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    des_textlight:{
        color: '#4a4947',
        fontSize: 13
    },
})

export default Worker_RequestItem;