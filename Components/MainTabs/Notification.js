import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import MyCarousel from './Carousel/MyCarousel';
import BrowseSlider from '../BottomNavItems/BrowseSlider/BrowseSlider';
import {SocialIcon, Card, ListItem, Button, Icon} from 'react-native-elements';
import OverlayViewer from './Overlay/Overlay';
import * as Progress from 'react-native-progress';
import {Divider} from 'react-native-elements';
import FloatingAction from './FloatinItem/src/FloatingAction';


import DataGrapgh from "./HomeComponent/DataGrapgh";
import VoicePackage from "./HomeComponent/VoicePackage";
import LoyalPoint from "./HomeComponent/LoyalPoint";
import PackageDetail from "./HomeComponent/PackageDetail";
import FooterCard from "./HomeComponent/FooterCard";
import QrCard from "./HomeComponent/QrCard";

export default function Notification({navigation}) {
  const [data_voice, setData_voice] = useState('data');
  
  
  const cardData = [{topic: 'Loyalty info', img: require('./HomeComponent/couple.jpg')}, 
                    {topic: 'Dialog offers', img: require('./HomeComponent/couple2.jpeg')}, 
                    {topic: 'Exclusives', img: require('./HomeComponent/couple3.png')}, 
                    {topic: 'Events & News', img: require('./HomeComponent/couple4.jpg')} ];
                    
  const qrData = [{topic: 'Loyalty info', img: require('./HomeComponent/index.png')} ];
                    
  const [cardDataDet, setCardDataDet] = useState(cardData);     

  return (
    <View style={{flex: 1}}>
      <ScrollView>
      
        

        

       
      
        <View><Text style={{fontWeight: "bold",padding: 20, fontSize: 18}}>Aug 28</Text></View>
        <Divider />
        
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText1: {
    color: '#fff',
  },
  buttonText2: {
    color: '#841584',
  },
  data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#841584',
    width: '30%',
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    backgroundColor: '#fff',
    width: '30%',
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
