import React, {Component} from 'react';
import {Card, Button} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
import Dots from 'react-native-dots-pagination';
class LoyalPoint extends Component {
  state = {};
  render() {
    return (
      <Card>
        <View style={{marginTop: 0}}>
          <Text style={{color: '#424242', textAlign: 'center',fontSize: 15,marginBottom:5}}>
            Your Tier Points
          </Text>
        </View>
         <View style={{marginTop: 0}}>
          <Text style={{color: '#424242', textAlign: 'center',fontSize: 15,marginBottom:5}}>
            21,332
          </Text>
        </View>
        <View style={styles.data}>
          <Text
            style={{
              color: '#424242',
              marginTop: 0,
              fontSize: 14,
              marginBottom: 10,
            }}>
            earned as of - 30 Nov 2020
          </Text>
          
        </View>
        
       

        
      </Card>
    );
  }
}

export default LoyalPoint;

const styles = StyleSheet.create({
  data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
