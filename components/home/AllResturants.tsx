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
import AllResturantsSub from './subComponent/AllResturantsSub';
import {useNavigation} from '@react-navigation/native';

function AllResturants(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          color: 'gray',
          fontWeight: '500',
          paddingTop: 15,
        }}>
        FEATURED
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IndividualResturantsScreen');
        }}>
        <AllResturantsSub />
      </TouchableOpacity>
      <AllResturantsSub />
      <AllResturantsSub />
    </View>
  );
}

export default AllResturants;
