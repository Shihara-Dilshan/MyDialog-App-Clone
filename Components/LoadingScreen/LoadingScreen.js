import * as React from 'react';
import {Button, View, Text,StyleSheet, Image, StatusBar } from 'react-native';

export default function LoadingScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#fff'}}>
            <Image
        style={styles.tinyLogo}
        source={require('./logo.png')}
      />
       <StatusBar hidden />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 120,
    height: 120,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
