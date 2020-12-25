import React, {Component} from 'react';
import {Card, Button} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
import Dots from 'react-native-dots-pagination';
class PackageDetail extends Component {
  state = {};
  render() {
    return (
      <Card>
        <View style={styles.data}>
          <Text
            style={{
              color: '#424242',
              marginTop: 0,
              fontSize: 14,
              marginBottom: 10,
            }}> 
            Your package:  
          </Text>
          <View style={{marginTop: -4}}>
          </View>
          <Text
            style={{
              color: '#424242',
              marginTop: 0,
              fontSize: 14,
              marginBottom: 10,
              width: 190
            }}>
            VoLTE 20GB RENTAL 900 20GB anytime data 20GB night time bonus
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
            Rental:  
          </Text>
          <View style={{marginTop: -4}}>
          </View>
          <Text
            style={{
              color: '#424242',
              marginTop: 0,
              fontSize: 14,
              marginBottom: 10,
            }}>
            Rs. 900.00 + tax
          </Text>
        </View>
        
        <View style={styles.data}>
         
          <View style={{marginTop: -4, marginLeft: -8}}>
           <Button
            title="CHANGE PACKAGE"
            titleStyle={{color: '#f50057'}}
            type="clear"
          />
          </View>
         
        </View>


        
      </Card>
    );
  }
}

export default PackageDetail;

const styles = StyleSheet.create({
  data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',

  },
});
