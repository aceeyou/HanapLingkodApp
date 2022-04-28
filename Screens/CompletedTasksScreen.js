import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity,StatusBar } from 'react-native';
import CustomHeader from '../components/CustomerHeader';

function CompletedTasksScreen({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight,}}>
        <CustomHeader title="Completed Tasks" navigation={navigation}/>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Completed Tasks!</Text>
          <TouchableOpacity 
            style={{backgroundColor: 'blue', padding: 10, width: '60%'}}
            onPress={() => navigation.navigate("Home")}
            >
              <Text style={{color: 'white', textAlign:'center'}}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

export default CompletedTasksScreen;