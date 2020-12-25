import * as React from 'react';
import { View, Text, ScrollView,StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import MyCarousel from './Carousel/MyCarousel';
import BrowseSlider from '../BottomNavItems/BrowseSlider/BrowseSlider';
import {SocialIcon, Card, ListItem, Button, Icon} from 'react-native-elements';
import OverlayViewer from './Overlay/Overlay';
import * as Progress from 'react-native-progress';
import { Divider } from 'react-native-elements';
import FloatingAction from "./FloatinItem/src/FloatingAction";

export default function HomeScreen({navigation}) {
    const actions = [
  {
    
    text: "Chat with us",
    name: "bt_accessibility",
    position: 1,
    color: '#fff',
    icon: {uri: 'https://icons-for-free.com/iconfiles/png/512/chat+icon-1320184411998302345.png'},
  },
  {
    icon: {uri: 'https://falconridgecharter.org/wp-content/uploads/2020/09/4-47194_question-mark-png-question-mark-hover-icon-transparent.png'},
    text: "My request",
    name: "bt_language",
    position: 2,
    color: '#fff'
  },
  {
    icon: {uri: 'https://cdn2.vectorstock.com/i/1000x1000/42/76/apply-form-icon-vector-6244276.jpg'},
    text: "Make a request",
    name: "bt_room",
    position: 3,
    color: '#fff'
  },
  {
    icon: {uri: 'https://w7.pngwing.com/pngs/668/704/png-transparent-facebook-messenger-iphone-messaging-apps-computer-icons-iphone-blue-angle-electronics.png'},
    text: "Dialog digital assistant",
    name: "bt_videocam",
    position: 4,
    color: '#fff'
  },
  {
    icon: {uri: 'https://cdn3.iconfinder.com/data/icons/basicolor-reading-writing/24/077_twitter-512.png'},
    text: "Twitter",
    name: "bt_videoscam",
    position: 5,
    color: '#fff'
  }
];
    return (
      <View style={{flex: 1}}>
  <ScrollView><View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <BrowseSlider/>
               <View style={styles.container}>
      <View style={styles.button} ><TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {}}
                    ><Text style={{
                                color: '#fff',
                            }}>Data</Text></TouchableOpacity></View>
      <View style={{width: '15%'}} ><TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {}}
                    ><Text style={{
                                color: '#fff',
                            }}></Text></TouchableOpacity></View>
                            
      <View style={styles.button} >
      <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {}}
                    ><Text style={{
                                color: '#fff',
                            }}>Voice</Text></TouchableOpacity>
      </View>
      
    </View>
    <View><Text  style={{color: '#424242', marginTop: 10}}>Bill period 21 Dec 2020 - 20 Jan 2021</Text></View>
            </View>
            <Card>
  <View style={styles.data}><Text  style={{color: '#424242', marginTop: 0, fontSize: 16,marginBottom: 10}}>Any time data</Text>
  <Text  style={{color: '#424242', marginTop: 0, fontSize: 11}}>86% left</Text></View>
  <Progress.Bar progress={0.3} width={Dimensions.get('window').width-60} height={15} color="#ff9800" unfilledColor="#fff8e1" borderWidth={0}/>
  <Card.Divider/>
  
</Card>
            
            </ScrollView>
  <FloatingAction
    actions={actions}
    color='#ffd600'
    position="right"
    floatingIcon={require("./../../assets/businessman.jpg")}
    iconWidth={78}
    iconHeight={78}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
  />
</View>

    
      
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  data : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#841584',
    width: '30%',
    height: 30,
    borderRadius:30,
                justifyContent: 'center', 
                alignItems:'center',
                
              
  }
});

