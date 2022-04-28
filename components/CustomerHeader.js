import * as React from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function CustomHeader(props){
    const navigation = useNavigation();
    return(
      <View style={{flexDirection: 'row', height: 50,paddingTop: 15}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
            {
                props.isHome ?
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={{width: 25, height: 25, marginLeft: 20}}
                        source={require('../assets/icons/hamburger.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                :
                <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => navigation.goBack()}
                >
                    <Image style={{width: 25, height: 25}}
                        source={require('../assets/icons/arrow-left.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            }
        </View>
        <View style={{flex: 3, justifyContent: 'center'}}>
          <Text style={{textAlign: 'left', fontSize: 20, fontWeight: '700'}}>{props.title}</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    )
}

export default CustomHeader;