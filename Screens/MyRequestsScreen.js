import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity,StatusBar, ScrollView } from 'react-native';
import CustomHeader from '../components/CustomerHeader';
import RequestsItem from '../components/RequestsItem';
import Worker_RequestItem from '../components/Worker_RequestItem';

function MyRequestsScreen({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>
        <ScrollView>
          <CustomHeader title="My Requests" navigation={navigation}/>
          <View style={{flex: 1, justifyContent: 'center', marginTop: 30, paddingHorizontal: 30, paddingBottom: 100}}>
            <Text style={{fontSize: 18, marginLeft: 20, marginBottom: 30}}>Below are the list of requests</Text>

            <RequestsItem service="Deep Cleaning" category="Bedroom" date="11 September, 11:11AM" worker="Narda D. Custodio" priceRange="P1100 - P2600" />
            <RequestsItem />
            <RequestsItem />
            <RequestsItem />
            <Worker_RequestItem />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default MyRequestsScreen;