import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Card, Button } from 'react-native-elements';
import * as Progress from 'react-native-progress';


class DataGrapgh extends React.Component {
    constructor(props){
       super(props);
       this.state={};
    }

    render() { 
        return ( 
            <Card>
            <View style={styles.data}>
              <Text
                style={{
                  color: '#424242',
                  marginTop: 0,
                  fontSize: 16,
                  marginBottom: 10,
                }}>
                Any time data
              </Text>
              <Text style={{color: '#424242', marginTop: 0, fontSize: 11}}>
                86% left
              </Text>
            </View>
            <Progress.Bar
              progress={0.1}
              width={Dimensions.get('window').width - 60}
              height={15}
              color="#ff9800"
              unfilledColor="#fff8e1"
              borderWidth={0}
            />
            <View style={styles.data}>
              <Text style={{color: '#424242', marginTop: 5, fontSize: 10}}>
                2.82 GB used of 20 GB
              </Text>
              <Text style={{color: '#4a148c', marginTop: 5, fontSize: 10}}>
                Valid for : 26 d : 1 hrs
              </Text>
            </View>

            <View style={[styles.data, {marginTop: 20}]}>
              <Text
                style={{
                  color: '#424242',
                  marginTop: 0,
                  fontSize: 16,
                  marginBottom: 10,
                }}>
                Night time bonus
              </Text>
              <Text style={{color: '#424242', marginTop: 0, fontSize: 11}}>
                86% left
              </Text>
            </View>
            <Progress.Bar
              progress={0.3}
              width={Dimensions.get('window').width - 60}
              height={15}
              color="#2196f3"
              unfilledColor="#e3f2fd"
              borderWidth={0}
            />
            <View style={styles.data}>
              <Text style={{color: '#424242', marginTop: 5, fontSize: 10}}>
                6.99 GB used of 20 GB
              </Text>
              <Text style={{color: '#4a148c', marginTop: 5, fontSize: 10}}>
                Valid for : 26 d : 1 hrs
              </Text>
            </View>

            <View style={{alignItems: 'center', marginTop: 20}}>
              <Button
                buttonStyle={{width: 140, backgroundColor: '#f50057'}}
                title="DATA ADD-ON"
                accessibilityLabel="Learn more about this purple button"
                onPress={() => this.props.navigation.navigate('FeedBack')}
              />
            </View>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Text style={{textDecorationLine: 'underline'}}>
                View data usage history
              </Text>
            </View>
          </Card>
         );
    }
}
 
export default DataGrapgh;

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
  
