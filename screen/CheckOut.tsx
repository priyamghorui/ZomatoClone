/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
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

import {Button, Card, Surface} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import CartEmpty from '../components/cart/subCart/CartEmpty';
import AllDetails from '../components/checkOut/AllDetails';

function CheckOut(): React.JSX.Element {
  return (
    <View>
      <AllDetails />
    </View>
  );
}

export default CheckOut;
