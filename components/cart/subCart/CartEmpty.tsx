/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

function CartEmpty(): React.JSX.Element {
  const navigate = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        backgroundColor: '#fff',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{aspectRatio: 1 / 2, bottom: 70}}
        resizeMode="contain"
        source={require('../../../assets/oops-your-cart-is-empty-page-template_586724-97.jpg')}
      />
    </View>
  );
}

const style = StyleSheet.create({});

export default CartEmpty;
