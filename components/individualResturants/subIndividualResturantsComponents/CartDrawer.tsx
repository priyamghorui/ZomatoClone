/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useNavigation } from '@react-navigation/native';
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

function CartDrawer(): React.JSX.Element {
      const itemCartRedux = useSelector(state => state.itemCartReducer);
        const navigation = useNavigation();
      
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor:"#fff"
      }}>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'baseline',
        }}>
        <Feather size={30} name="shopping-bag" />
        <Text style={{fontWeight: '500', marginLeft: 8}}> {itemCartRedux.length} ITEMS ADDED </Text>
        <View style={{paddingLeft: 8}}>
          <AntDesign color="red" size={15} name="caretup" />
        </View>
      </TouchableOpacity>
      <View>
        

        <Button
          mode="contained"
          style={{backgroundColor: 'red', borderRadius: 9}}
          onPress={() => {
            navigation.navigate('CheckOut')
          }}>
          <Text style={{fontSize: 18}}>Next</Text>
        </Button>
      </View>
    </View>
  );
}

export default CartDrawer;
