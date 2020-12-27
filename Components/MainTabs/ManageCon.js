import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Dots from 'react-native-dots-pagination';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import {Button, Card} from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Share from 'react-native-share';

export default function ManageCon({navigation}) {

    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
         
            <View style={styles.userInfoSection}>
                <View style={{alignItems: 'flex-end'}}>
                 <Button
            buttonStyle={{width: 160,marginTop: 20,marginRight: 16, backgroundColor: '#f50057'}}
            title="ADD CONNECTION"
            titleStyle={{color: '#fff'}}
          />
          </View>
	 <Card>
	 
     
        <View style={styles.data}>
          <Text
            style={{
              color: '#424242',
              marginTop: 0,
              fontSize: 14,
              marginBottom: 10,
            }}> 
             📼 814286648  
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
            Primary
          </Text>
        </View>
        
        <View style={styles.data2}>
        
          <View style={{marginTop: -4, marginLeft: -12}}>
          <Dots length={1} active={0} activeColor="#76ff03" />
          </View>
          <Text
            style={{
              color: 'grey',
              marginTop: 0,
              fontSize: 14,
              marginBottom: 10,
              marginLeft: -7
            }}>
            Tap to add a nickname 
          </Text>
        </View>
        
        <View style={styles.data}>
         
          <View style={{marginTop: -4, marginLeft: -8, marginBottom: 20}}>
           
          </View>
         
        </View>


        
      </Card>
            </View>




            
        </SafeAreaView>
</ScrollView>

);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
},
data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  data2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',

  },
    userInfoSection: {
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'normal',
    },
    caption: {
        fontSize: 16,
        textAlign:'center',
        fontWeight: '500',
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
        backgroundColor: '#2e8b57',
        borderRadius: 5,
        marginBottom:10
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#fff',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});

