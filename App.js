import React, {useState, useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './Components/MainTabs/Home';
import {DrawerContent} from './Components/DrawerContent';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import {
    Provider as PaperProvider,
} from 'react-native-paper';

import Profile from './Components/MainTabs/Profile';
import ManageCon from './Components/MainTabs/ManageCon';
import MyLoyalty from './Components/MainTabs/MyLoyalty';
import Support from './Components/MainTabs/Support';
import Purchase from './Components/MainTabs/Purchase';
import Settings from './Components/MainTabs/Settings';
import Feedback from './Components/MainTabs/Feedback';
import DataAdOn from './Components/MainTabs/DataAdOn';
import LoginScreen from './Components/User/Login';
import SignupScreen from './Components/User/Signup';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PurchaseStack = createStackNavigator();
const HelpStack = createStackNavigator();
const LocateStack = createStackNavigator();
const DataAdOnStack = createStackNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#6a1b9a'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'},
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title: '814286648',
            headerLeft: () => (<Icon.Button name="ios-menu" size={32} backgroundColor="#6a1b9a"
                                            onPress={() => navigation.openDrawer()}/>),
            headerRight: () => (<View style={{flex: 1,flexDirection: 'row',alignItems: 'center'}}><Icon.Button name="ios-notifications" size={28} backgroundColor="#6a1b9a"
                                            onPress={() => {}}/><Icon.Button name="apps" size={28} backgroundColor="#6a1b9a"
                                            onPress={() => {}}/></View>),
                                            
        }}/>
    </HomeStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#6a1b9a'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'},
    }}>
        <ProfileStack.Screen name="Profile" component={ManageCon} options={{
            title: 'Manage connections',
            headerLeft: () => (<Icon.Button name="arrow-back" size={25} backgroundColor="#6a1b9a"
                                            onPress={() => navigation.navigate('Home')}/>),
            headerRight: () => (<View style={{flex: 1,flexDirection: 'row',alignItems: 'center'}}><Icon.Button name="ios-notifications" size={28} backgroundColor="#6a1b9a"
                                            onPress={() => {}}/><Icon.Button name="apps" size={28} backgroundColor="#6a1b9a"
                                            onPress={() => {}}/></View>),
        }}/>
    </ProfileStack.Navigator>
);

const PurchaseStackScreen = ({navigation}) => (
    <PurchaseStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#6a1b9a'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'},
    }}>
        <PurchaseStack.Screen name="Purchase" component={Support} options={{
            title: 'Support',
            headerLeft: () => (<Icon.Button name="arrow-back" size={25} backgroundColor="#6a1b9a"
                                            onPress={() => navigation.navigate('Home')}/>),
            headerRight: () => (<View style={{flex: 1,flexDirection: 'row',alignItems: 'center'}}><Icon.Button name="ios-notifications" size={28} backgroundColor="#6a1b9a"
                                            onPress={() => {}}/><Icon.Button name="apps" size={28} backgroundColor="#6a1b9a"
                                            onPress={() => {}}/></View>),
        }}/>
    </PurchaseStack.Navigator>
);


const SettingsStackScreen = ({navigation}) => (
    <HelpStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#6a1b9a'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'},
    }}>
        <HelpStack.Screen name="Settings" component={MyLoyalty} options={{
            title: 'My Loyalty',
            headerLeft: () => (<Icon.Button name="arrow-back" size={25} backgroundColor="#6a1b9a"
                                            onPress={() => navigation.navigate('Home')}/>),
            headerRight: () => (<View style={{flex: 1,flexDirection: 'row',alignItems: 'center'}}><Icon.Button name="ios-notifications" size={28} backgroundColor="#6a1b9a"
                                            onPress={() => {}}/><Icon.Button name="apps" size={28} backgroundColor="#6a1b9a"
                                            onPress={() => {}}/></View>),
        }}/>
    </HelpStack.Navigator>
);

const FeedBackStackScreen = ({navigation}) => (
    <LocateStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#6a1b9a'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'normal'},
    }}>
        <LocateStack.Screen name="Feedback" component={DataAdOn} options={{
            title: 'Data Add-On',
            headerLeft: () => (<Icon.Button name="arrow-back" size={25} backgroundColor="#6a1b9a"
                                            onPress={() => navigation.navigate('Home')}/>),
            headerRight: () => (<View style={{flex: 1,flexDirection: 'row',alignItems: 'center'}}><Icon.Button name="ios-notifications" size={28} backgroundColor="#6a1b9a"
                                            onPress={() => {}}/><Icon.Button name="apps" size={28} backgroundColor="#6a1b9a"
                                            onPress={() => {}}/></View>),   
        }}/>
    </LocateStack.Navigator>
);



const _retrieveData = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default function App() {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#ce93d8');


    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    });

    useEffect(() => {
        setInterval(() => {
            _retrieveData('loginToken').then((user) => {
                if (user !== undefined && user !== null) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }

            });

        }, 1000);
    });


    if (isLoading) {
        return (<LoadingScreen/>);
    } else {
        return (<PaperProvider>
            <NavigationContainer>
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen name="Home" component={HomeStackScreen}/>
                    <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
                    <Drawer.Screen name="Purchase" component={PurchaseStackScreen}/>
                    <Drawer.Screen name="Settings" component={SettingsStackScreen}/>
                    <Drawer.Screen name="FeedBack" component={FeedBackStackScreen}/>

                </Drawer.Navigator>
            </NavigationContainer>
        </PaperProvider>);
    } 


}

