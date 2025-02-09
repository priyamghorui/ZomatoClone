/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Card, Surface} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function FilterMenu(): React.JSX.Element {
  return (
    <ScrollView horizontal style={{}}>
      <View style={{display: 'flex', flexDirection: 'row', marginVertical: 10}}>
        <View style={style.cardStyle}>
          <Image style={{height:26,width:26,backgroundColor:"white"}} source={require("../../../assets/veg-11550711253oulno8mnhz-Photoroom.png")}/>
          <Text style={{marginHorizontal: 5}}>Veg</Text>
        </View>
        <View style={style.cardStyle}>
          <MaterialCommunityIcons name="egg-fried" size={18} color={''} />
          {/* <Image style={{height:26,width:26,backgroundColor:"white"}} source={require("../../../assets/360_F_262988205_jc8VjO3SEmsMaeQeEFeLltu7tQpiaJl9.jpg")}/> */}
          <Text>Egg</Text>
        </View>
        <View style={style.cardStyle}>
          <Image style={{height:26,width:26,backgroundColor:"white"}} source={require("../../../assets/New-Non-Logo(1).png")}/>
          <Text>Non-Veg</Text>
        </View>
        <View style={style.cardStyle}>
          <Image style={{height:26,width:26,backgroundColor:"white"}} source={require("../../../assets/8a115dbf333426dcae790e00fee8fd90.jpg")}/>
          <Text>Best Seller</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  cardStyle: {
    borderRadius: 12,
    marginHorizontal: 9,
    borderColor: 'white',
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default FilterMenu;
