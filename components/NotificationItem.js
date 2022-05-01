import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

function NotificationItem(props) {

    // DATA

    return (
      <TouchableOpacity style={styles.btn_container}>
          <View style={styles.image_container}>
            <Image source={require('../assets/bg.png')} resizeMode="cover" style={styles.image}/>
          </View>
          <View style={styles.text_container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
          </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn_container:{
        width: '100%',
        height: 100,
        flexDirection: 'row',
        backgroundColor: '#DDDCDC',
        borderRadius: 6,
        marginTop: 15,
    },
    image_container:{  
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderRadius: 6,
        padding: 12
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 50
        
    },
    text_container:{  
        flex: 4,
        flexDirection: 'row' ,
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        paddingVertical: 15,
        paddingHorizontal: 8
    },
    title:{
        fontWeight: 'bold',
        fontSize: 14,
    },
    description:{
        fontSize: 13, 
        marginBottom: 8
    },
})

export default NotificationItem;