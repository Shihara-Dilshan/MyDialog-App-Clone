import React from "react";
import Slider2 from "react-native-slider";
import {  StyleSheet, View, Text } from "react-native";

class Slider extends React.Component {
  state = {
    value: 0.2,
    number : [0,1,5,10,15,25,50,100,200]
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:'right'}}>GB</Text>
        <Slider2
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
          thumbTintColor="#ff9800"
          minimumTrackTintColor="#ff9800"

         
        />
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
           
           
           
            <Text>
              0
            </Text>
            <Text>
              1
            </Text>
             <Text>
              5
            </Text>
            <Text>
              10
            </Text>
             <Text>
              15
            </Text>
            <Text>
              25
            </Text>
            <Text>
              50
            </Text>
             <Text>
              100
            </Text>
            <Text>
              200
            </Text>
             
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});

export default Slider;
