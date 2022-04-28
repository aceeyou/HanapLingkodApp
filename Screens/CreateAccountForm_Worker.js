import React, { useState, useEffect }  from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native';

import { FloatingLabelInput } from 'react-native-floating-label-input';
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import CustomHeader from '../components/CustomerHeader';

function CreateAccountForm_Worker({navigation}) {
    // gets the value from the input box/textbox on the screen
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [birthdate, setbirthdate] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [homeAdd, setHomeAdd] = useState('');
    const [workAdd, setWorkAdd] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    // shows and hides the text of the password input
    const [show, setShow] = useState(false);

    return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>
        <ScrollView style={{}}>
            <CustomHeader title="" navigation={navigation} />
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', paddingHorizontal: 30, paddingTop: 30}}>
                <Text style={{textAlign: 'center', fontSize: 23, fontWeight: '700', marginBottom: 0}}>Worker Information</Text>

                {/* TEXTBOX FOR USER INFORMATION */}
                <View style={{width: '100%', paddingHorizontal: '5%', paddingVertical: 40}}>
                    <View style={{marginBottom: 20}}>
                        {/* TEXTBOX FOR USERNAME */}
                    <FloatingLabelInput
                        label={'Username'}
                        value={username}
                        keyboarType="text"
                        labelStyle={{colorFocused: '#000'}}
                        onChangeText={value => setUsername(value)}
                        containerStyles={{borderWidth: 0, borderBottomWidth: 1, borderBottomColor: 'darkgray'}}
                        customLabelStyles={{colorFocused: 'black', colorBlurred: 'black', fontSizeFocused: 12,}}
                        inputStyles={{color: 'black',paddingTop: 20,}}
                    />
                    </View>

                    {/* PASSWORD */}
                    <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        label={'Password'}
                        isPassword
                        togglePassword={show}
                        value={password}
                        keyboarType="text"
                        onChangeText={value => setPassword(value)}
                        containerStyles={{borderWidth: 0, borderBottomWidth: 1, borderBottomColor: 'darkgray'}}
                        customLabelStyles={{color: 'black', colorFocused: 'black', colorBlurred: 'black', fontSizeFocused: 12,}}
                        inputStyles={{color: 'black', paddingTop: 20,}}
                        customShowPasswordComponent={<Text>Show</Text>}
                        customHidePasswordComponent={<Text>Hide</Text>}
                        style={{marginTop: 20}}
                    />
                    </View>

                    {/* FULL NAME */}
                    <View style={{marginBottom: 20}}>
                        {/* TEXTBOX FOR USERNAME */}
                    <FloatingLabelInput
                        label={'Full Name'}
                        value={fullname}
                        keyboarType="text"
                        labelStyle={{colorFocused: '#000'}}
                        onChangeText={value => setFullname(value)}
                        containerStyles={{borderWidth: 0, borderBottomWidth: 1, borderBottomColor: 'darkgray'}}
                        customLabelStyles={{colorFocused: 'black', colorBlurred: 'black', fontSizeFocused: 12,}}
                        inputStyles={{color: 'black',paddingTop: 20,}}
                    />
                    </View>

                    {/* BIRTHDATE */}
                    <View style={{flexDirection:'row', width: '100%',marginBottom: 20}}>
                        {/* TEXTBOX FOR USERNAME */}
                        <View style={{flex: 3, width: '100%', marginRight: 8}}>
                            <FloatingLabelInput
                                label={'Birthday'}
                                value={birthdate}
                                keyboarType="text"
                                labelStyle={{colorFocused: '#000'}}
                                onChangeText={value => setbirthdate(value)}
                                containerStyles={{borderWidth: 0, borderBottomWidth: 1, borderBottomColor: 'darkgray'}}
                                customLabelStyles={{colorFocused: 'black', colorBlurred: 'black', fontSizeFocused: 12,}}
                                inputStyles={{color: 'black',paddingTop: 20,}}
                            />
                        </View>
                        {/* AGE */}
                        <View style={{flex: 1, width: '100%', marginRight: 8}}>
                            <FloatingLabelInput
                                label={'Age'}
                                value={age}
                                keyboarType="text"
                                labelStyle={{colorFocused: '#000'}}
                                onChangeText={value => setAge(value)}
                                containerStyles={{borderWidth: 0, borderBottomWidth: 1, borderBottomColor: 'darkgray'}}
                                customLabelStyles={{colorFocused: 'black', colorBlurred: 'black', fontSizeFocused: 12,}}
                                inputStyles={{color: 'black',paddingTop: 20,}}
                            />
                        </View>
                        {/* SEX | GENDER */}
                        <View style={{flex: 1, width: '100%'}}>
                            <FloatingLabelInput
                                label={'Gender'}
                                value={gender}
                                keyboarType="text"
                                labelStyle={{colorFocused: '#000'}}
                                onChangeText={value => setGender(value)}
                                containerStyles={{borderWidth: 0, borderBottomWidth: 1, borderBottomColor: 'darkgray'}}
                                customLabelStyles={{colorFocused: 'black', colorBlurred: 'black', fontSizeFocused: 12,}}
                                inputStyles={{color: 'black',paddingTop: 20,}}
                            />
                        </View>
                    </View>

                    {/* HOME ADDRESS */}
                    <View style={{marginBottom: 20}}>
                        {/* TEXTBOX FOR USERNAME */}
                    <FloatingLabelInput
                        label={'Home Address'}
                        value={homeAdd}
                        keyboarType="text"
                        labelStyle={{colorFocused: '#000'}}
                        onChangeText={value => setHomeAdd(value)}
                        containerStyles={{borderWidth: 0, borderBottomWidth: 1, borderBottomColor: 'darkgray'}}
                        customLabelStyles={{colorFocused: 'black', colorBlurred: 'black', fontSizeFocused: 12,}}
                        inputStyles={{color: 'black',paddingTop: 20,}}
                    />
                    </View>

                    {/* WORK ADDRESS */}
                    <View style={{marginBottom: 20}}>
                        {/* TEXTBOX FOR USERNAME */}
                    <FloatingLabelInput
                        label={'Work Address'}
                        value={workAdd}
                        keyboarType="text"
                        labelStyle={{colorFocused: '#000'}}
                        onChangeText={value => setWorkAdd(value)}
                        containerStyles={{borderWidth: 0, borderBottomWidth: 1, borderBottomColor: 'darkgray'}}
                        customLabelStyles={{colorFocused: 'black', colorBlurred: 'black', fontSizeFocused: 12,}}
                        inputStyles={{color: 'black',paddingTop: 20,}}
                    />
                    </View>

                    {/* PHONE NUMBER */}
                    <View style={{marginBottom: 20}}>
                        {/* TEXTBOX FOR USERNAME */}
                    <FloatingLabelInput
                        label={'Phone Number'}
                        value={phoneNumber}
                        keyboarType="text"
                        labelStyle={{colorFocused: '#000'}}
                        onChangeText={value => setPhoneNumber(value)}
                        containerStyles={{borderWidth: 0, borderBottomWidth: 1, borderBottomColor: 'darkgray',}}
                        customLabelStyles={{colorFocused: 'black', colorBlurred: 'black', fontSizeFocused: 12,}}
                        inputStyles={{color: 'black',paddingTop: 20,}}
                    />
                    </View>

                    {/* BUTTON FOR PHOTO ATTACHMENTS */}
                    <View style={{marginTop: 15}}>
                        <Text>License / Certificates (Optional):</Text>
                        <TouchableOpacity style={{backgroundColor: '#c4c4c4', paddingVertical: 8, alignItems: 'center', marginTop: 15, borderRadius: 5}}>
                            <Text style={{fontWeight: '700'}}>Attach photos here</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                {/* SIGN IN & CREATE NEW ACCOUNT BUTTON */}
                <View style={{width: '100%', alignItems: 'flex-end', padding: 0, marginBottom: 50,  paddingRight: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate("CAF_Worker_ServiceSelect")} style={{width: 100, padding: 10, flexDirection: 'row'}} >
                        <Text style={{color: '#000', textAlign:'center', fontSize: 16, fontWeight: '700', borderBottomWidth: .7}}>Next Page</Text>
                        <Image source={require('../assets/icons/arrow-right.png')} style={{width: 20, height: 20, marginHorizontal: 8}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  btn:{
    backgroundColor: '#338CF4', 
    padding: 10,
    width: '90%',
    marginBottom: 20,
    borderRadius: 6
  },
})

export default CreateAccountForm_Worker;