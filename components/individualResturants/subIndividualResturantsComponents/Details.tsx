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

function Details(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{fontSize: 25, textAlign: 'center'}}>Pushpa Resturants</Text>
      <Text style={{fontSize: 15, color: 'gray', textAlign: 'center'}}>
        details about what have
      </Text>
      <Text style={{fontSize: 15, color: 'gray', textAlign: 'center'}}>
        about ratings
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: 'green',
          margin: 'auto',
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 8,
          marginTop:8,
          
        }}>
        <Text style={{color:"white"}}>4.3 </Text>
        <AntDesign name="star" size={15} color={'white'} />
      </View>
    </View>
  );
}

export default Details;
