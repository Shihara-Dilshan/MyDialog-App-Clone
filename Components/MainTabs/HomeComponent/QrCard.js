import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
import {Card, Button } from 'react-native-elements';
import * as Progress from 'react-native-progress';




class QrCard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {};
    }
    render() { 
    

        return ( 
            <Card containerStyle={{padding: 0}}>
            <View style={styles.container}>
               
      
        <View style={styles.container2}>
      <Text style={{marginLeft: 20,color: '#424242', fontSize: 12}}>{this.props.titile1}</Text>
      <Text style={{marginLeft: 20,color: '#424242'}}></Text>
      <Text style={{marginLeft: 20,color: '#212121',fontSize: 14,textDecorationLine: 'underline'}}>{this.props.titile2}</Text>
       </View >
      <Image style={{width: 100, height:100, padding: 0}} source={this.props.image} />
    </View>
         
           
                  
          </Card>
         );
    }
}
 
export default QrCard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    container2: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
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
  
