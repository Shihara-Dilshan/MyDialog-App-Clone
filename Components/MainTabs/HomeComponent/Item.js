import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const data = [
{
  id: "1",
  image: "https://image.similarpng.com/very-thumbnail/2020/08/Notification-bell-Purple-vector-PNG.png",
  name: 'Dialog Suraksha',
  price: '04:29 PM',
  amountTaken: 13
}
];

class Item extends Component {
  _renderItem({ item, index }) {
    const { 
      containerStyle, 
      lastItemStyle,
      imageStyle, 
      textStyle, 
      counterStyle,
      priceStyle } = styles;
    
    const image = item.image;
    return (
    <View style={(index + 1 === data.length) ? lastItemStyle : containerStyle}>
     <Image
        style={styles.tinyLogo}
        source={{
          uri: image.toString(),
        }}
      />
      
      <View style={textStyle}>
        <Text style={{ color: '#2e2f30',width: 'auto', fontSize:14 }}>{item.name}</Text>
       <Text style={{ color: '#2e2f30',width: 'auto',color: 'grey', fontSize:14, marginTop: 5 }}>04:29 PM</Text>
      </View>

      <View style={counterStyle}>
       

        <Icon.Button 
          name="chevron-down" 
          size={25} 
          color='#000' 
          backgroundColor='#fff' 
          style={{  backgroundColor: '#fff', height: 40, width: 40 }} 
          iconStyle={{ marginRight: 0, textAlign: 'center',color:'grey' }}
        />

      </View>
    </View>);
  }


  render() {
    return (
      <FlatList
        data={data}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  imageStyle: {
    width: 50, 
    height: 50, 
    marginRight: 20
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center'
  },
  priceStyle: {
    backgroundColor: '#ddd',
    width: 140,
    alignItems: 'flex-start',
    marginTop: 3,
    borderRadius: 3
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tinyLogo: {
    width: 30,
    height: 30,
    borderRadius: 150 / 2,
    marginRight: 10,
    marginTop: 8
  },
  logo: {
    width: 66,
    height: 58,
  },
};

export default Item;
