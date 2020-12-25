import React from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

async function clearAsyncStorage(){
    AsyncStorage.clear();
}

export function DrawerContent(props) {

    const paperTheme = useTheme();

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                     <LinearGradient
                    colors={['#8e24aa', '#4a148c']}
                    style={styles.signIn}
                >
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://avatars1.githubusercontent.com/u/61949881?s=460&u=093cb2d9dcd3f29f054c3143a7dd06569b928975&v=4'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Shihara Dilshan</Title>
                                <Caption style={styles.caption}>814286648</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>

                            </View>

                        </View>
                    </View>
	            </LinearGradient>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                        icon={({color, size}) => (
                        <Icon
                            name="account"
                            color={color}
                            size={28}
                        />
                    )}
                        label="My profile"
                        onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="transit-detour"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="Manage connections"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="phone-alert"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('Purchase')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="hand-heart"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="My loyalty"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="raspberry-pi"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="Star points"
                            onPress={() => {props.navigation.navigate('FeedBack')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="tablet-android"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="App transaction history"
                            onPress={() => {props.navigation.navigate('FeedBack')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="account-multiple"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="Help a friend"
                            onPress={() => {props.navigation.navigate('FeedBack')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="hand-pointing-right"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="Invite friends"
                            onPress={() => {props.navigation.navigate('FeedBack')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="credit-card"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="Payments"
                            onPress={() => {props.navigation.navigate('FeedBack')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="medal"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="Promo code"
                            onPress={() => {props.navigation.navigate('FeedBack')}}
                        />
                        <Drawer.Section style={styles.bottomDrawerSection}>
               
                        
                         <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="water-well"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="eZ Cash"
                            onPress={() => {props.navigation.navigate('FeedBack')}}
                        />
                         <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="wifi"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="Network coverage"
                            onPress={() => {props.navigation.navigate('FeedBack')}}
                        />
                         <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="map-marker"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="Locate us"
                            onPress={() => {props.navigation.navigate('FeedBack')}}
                        />
                         <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                    name="youtube-studio"
                                    color={color}
                                    size={28}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('FeedBack')}}
                        />
                    </Drawer.Section>
                    </Drawer.Section>
                </View>
           
                <DrawerItem
                    
                    label="App version 12.0.2.13048780"
                    onPress={clearAsyncStorage}
                />
                
         
            </DrawerContentScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      margin: 0,
      padding: 0,
      paddingTop:0,
      marginTop:-5

    },
    userInfoSection: {
      paddingLeft: 14,
        marginTop: -10,
        padding: 10,
        height:120,
       
    },
    title: {
      fontSize: 21,
      marginTop: 3,
      fontWeight: 'normal',
      color: '#fff'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color: '#fff'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
