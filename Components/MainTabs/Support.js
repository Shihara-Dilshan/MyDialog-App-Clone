import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Dots from 'react-native-dots-pagination';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import {Button, Card, Image} from 'react-native-elements';
import { SearchBar } from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Share from 'react-native-share';

export default function Support({navigation}) {
    const [width, setWidth] = useState(Dimensions.get('window').width);
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
         
            <View style={styles.userInfoSection}>
                <View style={{alignItems: 'flex-end'}}>
                 
          </View>
          <Image
  source={{ uri: 'https://image.freepik.com/free-vector/marriage-counseling-how-can-we-help-landing-page_52683-41952.jpg' }}
  style={{ width: Dimensions.get('window').width-20 , height: 200, margin: 10 }}
/>
        <SearchBar
        placeholder="Search on Dialog website"
        containerStyle={{backgroundColor: 'white', borderRadius: 5, width: Dimensions.get('window').width-20,marginLeft: 10,marginRight: 10,marginTop: -10}}

        leftIconContainerStyle={{backgroundColor: 'white'}}
        inputContainerStyle={{backgroundColor: 'white'}}
        onChangeText={() => {}}
        value={''}
        lightTheme={true}
      />
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
       <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: width/3, height:100, backgroundColor: '#fff',alignItems: 'center'}} >
          <Image
  source={{ uri: 'https://icons-for-free.com/iconfiles/png/512/chat+icon-1320184411998302345.png' }}
  style={{ width: 40 , height: 40, marginTop: 10 }}
/>
        <Text style={{color: 'grey', marginTop: 15, textAlign:'center'}}>Chat with us</Text>
        
        </View>
       <View style={{width: width/3, height:100, backgroundColor: '#fff',alignItems: 'center'}} >
          <Image
  source={{ uri: 'https://image.freepik.com/free-vector/illustration-calendar-icon_53876-5588.jpg' }}
  style={{ width: 40 , height: 40, marginTop: 10 }}
/>
        <Text style={{color: 'grey', marginTop: 15,textAlign: 'center', textAlign:'center'}}>Book an appointment</Text>
        
        </View>
       
       <View style={{width: width/3, height:100, backgroundColor: '#fff',alignItems: 'center'}} >
          <Image
  source={{ uri: 'https://falconridgecharter.org/wp-content/uploads/2020/09/4-47194_question-mark-png-question-mark-hover-icon-transparent.png' }}
  style={{ width: 40 , height: 40, marginTop: 10 }}
/>
        <Text style={{color: 'grey', marginTop: 15, textAlign:'center'}}>My request</Text>
        
        </View>
       
        
        
       
      </View>
         <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: width/3, height:100, backgroundColor: '#fff',alignItems: 'center'}} >
          <Image
  source={{ uri: 'https://image.freepik.com/free-vector/illustration-play-button_53876-5617.jpg' }}
  style={{ width: 40 , height: 40, marginTop: 10 }}
/>
        <Text style={{color: 'grey', marginTop: 15, textAlign:'center'}}>How to videos</Text>
        
        </View>
       <View style={{width: width/3, height:100, backgroundColor: '#fff',alignItems: 'center'}} >
          <Image
  source={{ uri: 'https://w7.pngwing.com/pngs/668/704/png-transparent-facebook-messenger-iphone-messaging-apps-computer-icons-iphone-blue-angle-electronics.png' }}
  style={{ width: 40 , height: 40, marginTop: 10, borderRadius: 100/2 }}
/>
        <Text style={{color: 'grey', marginTop: 15, textAlign:'center', textAlign:'center'}}>Dialog digital assistant</Text>
        
        </View>
       
       <View style={{width: width/3, height:100, backgroundColor: '#fff',alignItems: 'center'}} >
          <Image
  source={{ uri: 'https://cdn2.vectorstock.com/i/1000x1000/42/76/apply-form-icon-vector-6244276.jpg' }}
  style={{ width: 40 , height: 40, marginTop: 10 }}
/>
        <Text style={{color: 'grey', marginTop: 15, textAlign:'center'}}>Make a request</Text>
        
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
       <View style={{width: width/3, height:100, backgroundColor: '#fff',alignItems: 'center'}} >
          <Image
  source={{ uri: 'https://image.freepik.com/free-vector/white-phone-icon_23-2147627279.jpg' }}
  style={{ width: 40 , height: 40, marginTop: 10, borderRadius: 100/2 }}
/>
        <Text style={{color: 'grey', marginTop: 15, textAlign:'center'}}>Voice agent</Text>
        
        </View>
       <View style={{width: width/3, height:100, backgroundColor: '#fff',alignItems: 'center'}} >
          <Image
  source={{ uri: 'https://cdn3.iconfinder.com/data/icons/basicolor-reading-writing/24/077_twitter-512.png' }}
  style={{ width: 40 , height: 40, marginTop: 10 }}
/>
        <Text style={{color: 'grey', marginTop: 15, textAlign:'center'}}>Twitter</Text>
        
        </View>
       
       <View style={{width: width/3, height:100, backgroundColor: '#fff',alignItems: 'center'}} >
          <Image
  source={{ uri: 'https://image.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg' }}
  style={{ width: 40 , height: 40, marginTop: 10 }}
/>
        <Text style={{color: 'grey', marginTop: 15, textAlign:'center'}}>Ask community</Text>
        
        </View>
      </View>
      </View>
	 
            </View>




            
        </SafeAreaView>
</ScrollView>

);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
},
data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  data2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',

  },
    userInfoSection: {
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'normal',
    },
    caption: {
        fontSize: 16,
        textAlign:'center',
        fontWeight: '500',
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
        backgroundColor: '#2e8b57',
        borderRadius: 5,
        marginBottom:10
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#fff',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});

