import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Image, TouchableOpacity, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import Create_AccountTypeScreen from './Screens/Create_AccountTypeScreen';
import NotificationsScreen from './Screens/NotificationsScreen';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import AvailableServicesScreen from './Screens/AvailableServicesScreen';
import MessagesScreen from './Screens/MessagesScreen';
import SearchScreen from './Screens/SearchScreen';
import MyRequestsScreen from './Screens/MyRequestsScreen';
import MyBookingsScreen from './Screens/MyBookingsScreen';
import CompletedTasksScreen from './Screens/CompletedTasksScreen';
import CreateAccountForm_Recruiter from './Screens/CreateAccountForm_Recruiter';
import CreateAccountForm_Worker from './Screens/CreateAccountForm_Worker';
import Worker_ServiceOfferedSelection from './Screens/Worker_ServiceOfferedSelection';
import DisplayListOfServices from './Screens/DisplayListOfServices';


function CustomDrawerContent(props){
  return(
    <SafeAreaView style={{flex: 1, backgroundColor:'white', marginTop: StatusBar.currentHeight * 1.3}}>
      <View style={{width: '100%', alignItems: 'flex-end', paddingRight: 30, paddingTop: 15}}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={require('./assets/icons/arrow-left.png')}/>
        </TouchableOpacity>
      </View>
      <View style={{height: 150, flexDirection: 'column', justifyContent: "flex-start", paddingHorizontal: 30, paddingTop: 40, borderBottomWidth: 1, borderBottomColor: 'lightgray',}}>
        <Image source={require('./assets/bg.png')} style={{width: 50, height: 50, borderRadius: 25, marginBottom: 10}} />
        <Text style={{fontSize: 20, fontWeight: '700'}}>HanapLingkod</Text>
      </View>
      <View style={{marginLeft: 30, marginTop: 40}}>
          <TouchableOpacity 
          style={{marginBottom: 25, flexDirection:'row', alignItems: 'center'}}
          onPress={() => props.navigation.navigate("Home")}
          >
            <Image source={require('./assets/icons/home-filled.png')} style={{width: 20, height: 20, marginRight: 15}}/>
            <Text style={{}}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={{marginBottom: 25, flexDirection:'row', alignItems: 'center'}}
          onPress={() => props.navigation.navigate("Requests")}
          >
            <Image source={require('./assets/icons/request.png')} style={{width: 20, height: 20, marginRight: 15}}/>
            <Text style={{}}>My Requests</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={{marginBottom: 25, flexDirection:'row', alignItems: 'center'}}
          onPress={() => props.navigation.navigate("Bookings")}
          >
            <Image source={require('./assets/icons/bookings.png')} style={{width: 20, height: 20, marginRight: 15}}/>
            <Text style={{}}>My Bookings</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={{marginBottom: 25, flexDirection:'row', alignItems: 'center'}}
          onPress={() => props.navigation.navigate("MyBookings")}
          >
            <Image source={require('./assets/icons/task-completed.png')} style={{width: 20, height: 20, marginRight: 15}}/>
            <Text style={{}}>Completed Tasks</Text>
          </TouchableOpacity>
      </View>
      <View style={{marginLeft: 30, marginTop: 40}}>
        <TouchableOpacity style={{marginTop: '100%', flexDirection:'row', alignItems: 'center'}}
          onPress={() => {props.navigation.navigate("LoginStack"); props.navigation.closeDrawer()}}>
          <Image source={require('./assets/icons/logout-filled.png')} style={{width: 20, height: 20, marginRight: 15}}/>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createNativeStackNavigator();

function HomeStack(){
  return(
    <StackHome.Navigator initialRouteName="Home" headerShown={false}>
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name="AccountTypeScreen" component={Create_AccountTypeScreen} options={navOptionHandler}/>
      <StackHome.Screen name="Notifications" component={NotificationsScreen} options={navOptionHandler} />
      <StackHome.Screen name="ServicesScreen" component={DisplayListOfServices} options={navOptionHandler} />
      
    </StackHome.Navigator>
  )
}

const StackLogin = createNativeStackNavigator();

function LoginStack(){
  return(
    <StackLogin.Navigator initialRouteName="LoginStack">
      <StackLogin.Screen name="LoginStack" component={LoginScreen} options={navOptionHandler}/>
      <StackLogin.Screen name="AccountTypeScreen" component={Create_AccountTypeScreen} options={navOptionHandler} />
      <StackLogin.Screen name="CAF_Recruiter" component={CreateAccountForm_Recruiter} options={navOptionHandler} />
      <StackLogin.Screen name="CAF_Worker" component={CreateAccountForm_Worker} options={navOptionHandler} />
      <StackLogin.Screen name="CAF_Worker_ServiceSelect" component={Worker_ServiceOfferedSelection} options={navOptionHandler} />

    </StackLogin.Navigator>
  )
}


function TabNivagator(){
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./assets/icons/home-filled.png')
                : require('./assets/icons/home-outline.png')
            } else if (route.name === 'AvailableServices') {
              iconName = focused ? require('./assets/icons/helmet-filled.png') 
              : require('./assets/icons/helmet-outline.png');
            } else if (route.name === "Search") {
              iconName = focused ? require('./assets/icons/search-filled.png') 
              : require('./assets/icons/search-outline.png');
            } else if (route.name === "Messages") {
              iconName = focused ? require('./assets/icons/chat-filled.png') 
              : require('./assets/icons/chat-outline.png');
            } else if (route.name === "Notifications") {
              iconName = focused ? require('./assets/icons/bell-filled.png') 
              : require('./assets/icons/bell-outline.png');
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width: 24, height: 24}} resizeMode='contain' />;
          },
        }
        )}
      >
        <Tab.Screen name="Home" component={HomeStack}/>
        <Tab.Screen name="AvailableServices" component={AvailableServicesScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{tabBarBadge: 5}}/>

        {/* is hidden */}
        <Tab.Screen name="Requests" component={MyRequestsScreen} options={{tabBarButton: () => (
            <View style={{width:0, height:0}}></View>
        ),}}/>
        <Tab.Screen name="Bookings" component={MyBookingsScreen} options={{tabBarButton: () => (
            <View style={{width:0, height:0}}></View>
        ),}}/>
        <Tab.Screen name="ServicesScreen" component={DisplayListOfServices} options={{tabBarButton: () => (
            <View style={{width:0, height:0}}></View>
        ), }}/>


        
      </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return(
    <Drawer.Navigator options={{headerShown: false}} 
      drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={TabNivagator} options={{headerShown: false}} />
        <Drawer.Screen name="MyRequests" component={MyRequestsScreen} options={{headerShown: false}} />
        <Drawer.Screen name="MyBookings" component={MyBookingsScreen} options={{headerShown:false}} />
        <Drawer.Screen name="CompletedTasks" component={CompletedTasksScreen} options={{headerShown:false}} />
      </Drawer.Navigator>
  )
}

const StackApp = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="LoginScreen">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
        <StackApp.Screen name="LoginScreen" component={LoginStack} options={navOptionHandler} />
        <StackApp.Screen name="Messages" component={MessagesScreen} options={navOptionHandler}/>
        <StackApp.Screen name="Notifications" component={NotificationsScreen} options={navOptionHandler} />
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}