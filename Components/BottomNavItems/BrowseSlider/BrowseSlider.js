import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";

 
export default class BrowseSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require("./2.jpg"),
        require("./4.jpg"),
        require("./3.jpeg"),
        require("./1.jpg"),
      ],
    };
    
  }
 
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
         autoplay={true}
         onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
         dotColor="red"
          inactiveDotColor="#90A4AE"
          dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 15,
 
    padding: 0,
    margin: 0
  }}
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -5,
    zIndex:1,
    height:230,
  }
});
