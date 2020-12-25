import  React, {useState} from 'react';
import { View, Text, ScrollView,StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import MyCarousel from './Carousel/MyCarousel';
import BrowseSlider from '../BottomNavItems/BrowseSlider/BrowseSlider';
import {SocialIcon, Card, ListItem, Button, Icon} from 'react-native-elements';
import OverlayViewer from './Overlay/Overlay';
import * as Progress from 'react-native-progress';
import { Divider } from 'react-native-elements';
import FloatingAction from "./FloatinItem/src/FloatingAction";

export default function HomeScreen({navigation}) {

   const [data_voice, setData_voice] = useState('data');

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
      <View style={data_voice === 'data' ? styles.button : styles.button2} ><TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {setData_voice('data')}}
                    ><Text style={data_voice === 'data' ? 
                               styles.buttonText1 : styles.buttonText2
                            }>Data</Text></TouchableOpacity></View>
      <View style={{width: '15%'}} ><TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {}}
                    ><Text style={{
                                color: '#fff',
                            }}></Text></TouchableOpacity></View>
                            
      <View style={data_voice !== 'data' ? styles.button : styles.button2} >
      <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {setData_voice('voice')}}
                    ><Text style={data_voice !== 'data' ? 
                               styles.buttonText1 : styles.buttonText2
                            }>Voice</Text></TouchableOpacity>
      </View>
      
    </View>
    <View><Text  style={{color: '#424242', marginTop: 10}}>Bill period 21 Dec 2020 - 20 Jan 2021</Text></View>
            </View>
            { data_voice === 'data' ? 
            
             <Card>
            
            
  <View style={styles.data}><Text  style={{color: '#424242', marginTop: 0, fontSize: 16,marginBottom: 10}}>Any time data</Text>
  <Text  style={{color: '#424242', marginTop: 0, fontSize: 11}}>86% left</Text></View>
  <Progress.Bar progress={0.1} width={Dimensions.get('window').width-60} height={15} color="#ff9800" unfilledColor="#fff8e1" borderWidth={0}/>
  <View style={styles.data}>
     <Text  style={{color: '#424242', marginTop: 5, fontSize: 10}}>2.82 GB used of 20 GB</Text>
     <Text  style={{color: '#4a148c', marginTop: 5, fontSize: 10}}>Valid for : 26 d : 1 hrs</Text>
  </View>
  
  <View style={[styles.data, { marginTop: 20 }]}><Text  style={{color: '#424242', marginTop: 0, fontSize: 16,marginBottom: 10}}>Night time bonus</Text>
  <Text  style={{color: '#424242', marginTop: 0, fontSize: 11}}>86% left</Text></View>
  <Progress.Bar progress={0.3} width={Dimensions.get('window').width-60} height={15} color="#2196f3" unfilledColor="#e3f2fd" borderWidth={0}/>
  
  
  <View style={styles.data}>
     <Text  style={{color: '#424242', marginTop: 5, fontSize: 10}}>6.99 GB used of 20 GB</Text>
     <Text  style={{color: '#4a148c', marginTop: 5, fontSize: 10}}>Valid for : 26 d : 1 hrs</Text>
  </View>
  
  <View style={{alignItems: 'center',marginTop: 20}}>
  <Button
  buttonStyle={{width: 140,  backgroundColor:"#f50057"}}
  title="DATA ADD-ON"
  accessibilityLabel="Learn more about this purple button"
/>
 </View>
<View style={{alignItems: 'center',marginTop: 20}}>
  <Text style={{textDecorationLine: 'underline'}}>
  View data usage history
</Text>
 </View>
  
  
</Card>
            
             :
             
                      <Card>
            
          <View style={{alignItems: 'center',marginTop: 0,color: 'red'}}>
  <Text style={{color: '#424242',textAlign: 'center'}}>
  Do you want to active voice service for this connection?
</Text>
 </View>
    
  
  
  <View style={{alignItems: 'center',marginTop: 20}}>
  <Button
  buttonStyle={{width: 140}}
  title="ACTIVATE"
  titleStyle={{color: '#f50057'}}
    type="clear"
/>
 </View>

  
</Card>
            
             
             
             
    }
            
            
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
  buttonText1: {
    color: "#fff"
  },
  buttonText2: {
    color: "#841584"
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
                
              
  },
  button2: {
    backgroundColor: '#fff',
    width: '30%',
    height: 30,
    borderRadius:30,
                justifyContent: 'center', 
                alignItems:'center',
                
              
  }
});

