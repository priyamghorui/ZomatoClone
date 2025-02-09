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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SpotLightResturantsSub from './subComponent/SpotLightResturantsSub';

function SpotLightResturounts(): React.JSX.Element {
  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          color: 'gray',
          fontWeight: '500',
          paddingTop:30,
       
        }}>
         IN THE SPOTLIGHT
      </Text>
      <ScrollView horizontal>
        <SpotLightResturantsSub />
        <SpotLightResturantsSub />
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
    // elevation: 10,
  },
});

export default SpotLightResturounts;
