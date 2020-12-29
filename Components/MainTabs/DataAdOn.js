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
import Slider from "./HomeComponent/Slider";

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const radio_props = [
  {label: 'For 1 day', value: 0 },
  {label: 'For 7 day', value: 1 },
  {label: 'For 30 days', value: 2 }
];
 

export default function DataAdOn({navigation}) {
  const [data_voice, setData_voice] = useState('data');
  const [value, setvalue] = useState(0);
  
  
 
  return (
    <View style={{flex: 1}}>
      <ScrollView>
      
        

        

        <Card>
        <View style={{marginTop: 0}}>
          <Text style={{color: '#ff9800', textAlign: 'center',fontSize: 45,marginBottom:5}}>
            1 GB
          </Text>
          
        </View>
         <View style={{marginTop: 0}}>
          <Text style={{color: '#424242', textAlign: 'center',fontSize: 15,marginBottom:45}}>
            Anytime
          </Text>
        </View>
        <Slider />
         <View style={{marginTop: 0}}>
          <Text style={{color: '#ff9800', textAlign: 'center',fontSize: 15,marginBottom:5}}>
           
          </Text>
          
        </View>
       <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          style={{backgroundColor: '#f5f5f5', padding: 20, borderRadius: 5}}
          wrapStyle={{color: 'red', padding: 20, borderRadius: 5}}
          formHorizontal={false}
  	  labelHorizontal={true}
          buttonColor={'#ff9800'}
          buttonSize={15}
          labelStyle={{marginBottom: 20,backgroundColor: '#f5f5f5',}}
          selectedButtonColor={'#ff9800'}
          animation={true}
         
          onPress={(value) => {setvalue(value)}}
        />
      </View>
        
       

        
      </Card>
        
        <View><Text></Text></View>
        
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

