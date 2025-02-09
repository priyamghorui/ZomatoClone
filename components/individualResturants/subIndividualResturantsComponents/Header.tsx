/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Card, Surface} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

function Header(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10,
      }}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>

      <Ionicons name="chevron-back" size={25} color={'black'} />
        </TouchableOpacity>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={{marginRight: 10}}>
          <Feather name="search" size={25} color={'black'} />
        </View>
        <View style={{marginRight: 10}}>
          <AntDesign name="hearto" size={25} color={'black'} />
        </View>
        <View style={{marginRight: 10}}>
          <MaterialCommunityIcons
            name="share-outline"
            size={25}
            color={'black'}
          />
        </View>

        <MaterialCommunityIcons
          name="dots-vertical"
          size={25}
          color={'black'}
        />
      </View>
    </View>
  );
}

export default Header;
