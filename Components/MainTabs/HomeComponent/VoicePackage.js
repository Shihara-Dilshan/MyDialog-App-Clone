import React, { Component } from 'react';
import {Card, Button } from 'react-native-elements';
import {
    View,
    Text,
  } from 'react-native';

class VoicePackage extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
            <View style={{alignItems: 'center', marginTop: 0, color: 'red'}}>
              <Text style={{color: '#424242', textAlign: 'center'}}>
                Do you want to active voice service for this connection?
              </Text>
            </View>

            <View style={{alignItems: 'center', marginTop: 20}}>
              <Button
                buttonStyle={{width: 140}}
                title="ACTIVATE"
                titleStyle={{color: '#f50057'}}
                type="clear"
              />
            </View>
          </Card>
         );
    }
}
 
export default VoicePackage;
