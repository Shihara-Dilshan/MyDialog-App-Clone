import * as React from 'react';
import {Button, View, Text, ScrollView} from 'react-native';
import MyCarousel from './Carousel/MyCarousel';
import BrowseSlider from '../BottomNavItems/BrowseSlider/BrowseSlider';
import {SocialIcon} from 'react-native-elements';
import OverlayViewer from './Overlay/Overlay';
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
               
            </View></ScrollView>
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


