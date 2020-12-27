import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import {Button} from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Share from 'react-native-share';

export default function Profile({navigation}) {

    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                
                <View style={{flexDirection: 'row', marginTop: 15,justifyContent:'center'}}>
                    <Avatar.Image
                        source={{
                            uri: 'https://avatars1.githubusercontent.com/u/61949881?s=460&u=093cb2d9dcd3f29f054c3143a7dd06569b928975&v=4',
                        }}
                        size={150}
                    />

                </View>
                <View style={{marginLeft: 20}}>
                    <Title style={[styles.title, {
                        marginTop: 15,
                        marginBottom: 45,
                        textAlign:'center'
                    }]}>Shihara Dilshan </Title>
                    <Caption style={styles.caption}>Primary connection: 814286648 </Caption>
                    <Caption style={[styles.caption, {textDecorationLine: 'underline'}]}>Manage connections </Caption>
                  
                </View>
                <View style={{alignItems: 'center'}}>
                 <Button
            buttonStyle={{width: 160,marginTop: 20, backgroundColor: '#f50057'}}
            title="EDIT MY PROFILE"
            titleStyle={{color: '#fff'}}
          />
          </View>
            </View>




            
        </SafeAreaView>
</ScrollView>

);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',

    },
    userInfoSection: {
        paddingHorizontal: 30,
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

