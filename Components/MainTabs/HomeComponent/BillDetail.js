import React, {Component} from 'react';
import {Card, Button} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';
import Dots from 'react-native-dots-pagination';
class BillDetail extends Component {
  state = {};
  render() {
    return (
      <Card>
        <View style={{marginTop: 0}}>
          <Text style={{color: '#424242', textAlign: 'left',fontSize: 15,marginBottom:5}}>
            Total amount payable: Rs.2,000.98
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
            Connection status: 
          </Text>
          <View style={{marginTop: -4, marginLeft: -5}}>
          <Dots length={1} active={0} activeColor="#76ff03" />
          </View>
          <Text
            style={{
              color: '#424242',
              marginTop: 0,
              fontSize: 14,
              marginBottom: 10,
              marginLeft: -7
            }}>
            Connected 
          </Text>
        </View>
        
        <View style={styles.data}>
          <Button
            buttonStyle={{width: 90,marginRight: 10, backgroundColor: '#f50057'}}
            title="PAY"
            titleStyle={{color: '#fff'}}
          />
          <View style={{marginTop: -4, marginLeft: -5}}>
          </View>
          <Button
            buttonStyle={{width: 140}}
            title="VIEW MY BILLS"
            titleStyle={{color: '#f50057'}}
            type="clear"
          />
        </View>


        
      </Card>
    );
  }
}

export default BillDetail;

const styles = StyleSheet.create({
  data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
});
