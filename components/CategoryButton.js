import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { withDecay } from 'react-native-reanimated';

const CategoryButton = (props) => {
    return(
        <TouchableOpacity style={styles.itemBox}>
            <Image style={styles.itemImage} source={props.categoryImage}/>
            <Text style={styles.itemText}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '43%',
        height: 140,
        marginBottom: 30,
        backgroundColor: '#DDDCDC',
        borderRadius: 6,
    },
    itemImage:{
        width: '30%',
        height: '30%',
        borderRadius: 6,
        marginVertical: 10,
    },
    itemText:{
        fontSize: 14,
    },
});

export default CategoryButton;