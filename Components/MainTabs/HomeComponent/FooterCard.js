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


class FooterCard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {};
    }
    render() { 
        return ( 
            <Card containerStyle={{padding: 0}}>
            <View style={styles.container}>
               
      
       
      <Text style={{marginLeft: 20,color: '#424242'}}>{this.props.titile}</Text>
      <Image style={{width: 180, height:120, borderTopLeftRadius: 45,borderBottomLeftRadius: 45, padding: 0}} source={this.props.image} />
    </View>
         
           
                  
          </Card>
         );
    }
}
 
export default FooterCard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
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
  
