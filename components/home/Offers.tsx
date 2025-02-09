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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Card, Surface} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

function Offers(): React.JSX.Element {
  // const itemCartCount=useSelector(state => state.itemCartReducer)
  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          color: 'gray',
          fontWeight: '500',
          marginVertical: 5,
        }}>
        EXPLORE
      </Text>
      <ScrollView horizontal>
        <Image
          style={style.imges}
          resizeMode="stretch"
          source={require('../../assets/images.jpg')}
        />
        {/* <Text
        onPress={() => {
          console.log(itemCartCount);
        }}>
        hello
      </Text> */}
        <Image
          style={style.imges}
          resizeMode="stretch"
          source={require('../../assets/50OffL.jpg')}
        />
        <Image
          style={style.imges}
          resizeMode="stretch"
          source={require('../../assets/images-_1_.jpg')}
        />
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  imges: {
    height: 150,
    width: 150,
    margin: 15,
    borderRadius: 20,
    elevation: 10,
  },
});

export default Offers;
