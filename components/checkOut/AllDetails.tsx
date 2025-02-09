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
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {itemCart} from '../../redux/action/action';
import CartEmptyCheckOut from './subCheckOut/CartEmptyCheckOut';

function AllDetails(): React.JSX.Element {
  const navigate = useNavigation();
  const [allItem, setallItem] = useState([]);
  const dispatch = useDispatch();
  const itemCartdata = useSelector(state => state.itemCartReducer);

  useEffect(() => {
    setallItem(itemCartdata);
  }, [itemCartdata]);

  return (
    <View
      style={{
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: '#fff',
      }}>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            marginHorizontal: 15,
            borderBottomColor: '#cbcbcb',
            borderBottomWidth: 1,
          }}>
          <View style={{margin: 'auto'}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                //   textAlign: 'center',

                // backgroundColor: '#fff',
              }}>
              Check Out
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigate.goBack();
            }}>
            <Entypo size={30} name="cross" />
          </TouchableOpacity>
        </View>
        {allItem.length != 0 ? (
          allItem.map((data, key) => (
            <View
              key={key}
              style={{borderBottomColor: '#cbcbcb', borderBottomWidth: 1}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                  marginVertical: 15,
                }}>
                <View>
                  <Image
                    style={{height: 90, aspectRatio: 1 / 1, borderRadius: 15}}
                    source={{uri: data.item.meals[0].strMealThumb}}
                  />
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      // marginHorizontal: 20,
                      borderRadius: 5,
                      backgroundColor: '#fddbde',
                      bottom: 14,
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(
                          itemCart({
                            item: data.item,
                            quantity: data.quantity - 1,
                          }),
                        );
                      }}>
                      <Text
                        style={{
                          fontSize: 22,
                          color: 'red',
                          fontWeight: 'bold',
                          paddingHorizontal: 10,
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{fontSize: 15, color: 'red', fontWeight: 'bold'}}>
                      {data.quantity}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(
                          itemCart({
                            item: data.item,
                            quantity: data.quantity + 1,
                          }),
                        );
                      }}>
                      <Text
                        style={{
                          fontSize: 22,
                          color: 'red',
                          fontWeight: 'bold',
                          paddingHorizontal: 10,
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{justifyContent: 'center', width: '50%'}}>
                  <Image
                    style={{height: 35, width: 35, backgroundColor: 'white'}}
                    source={require('../../assets/New-Non-Logo(1).png')}
                  />
                  <Text
                    style={{fontSize: 18}}
                    onPress={() => {
                      console.log(itemCart);
                    }}>
                    {data.item.meals[0].strMeal}
                  </Text>
                  <Text style={{fontSize: 15}}>
                    <FontAwesome size={15} color={'black'} name="rupee" />{' '}
                    {data.item.meals[0].idMeal.slice(0, 3)}
                  </Text>
                  {/* <Text style={{fontSize: 13}}>Quantity : {data.quantity}</Text> */}
                </View>
              </View>
            </View>
          ))
        ) : (
          <View>
            <CartEmptyCheckOut />
          </View>
        )}
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',

            // backgroundColor: '#fff',
          }}>
          Billing Details
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: '#fff',
        }}>
        <Button
          mode="contained"
          style={{backgroundColor: 'red', borderRadius: 9}}
          onPress={() => {}}>
          <Text style={{fontSize: 18}}>Payment</Text>
        </Button>
      </View>
    </View>
  );
}

export default AllDetails;
