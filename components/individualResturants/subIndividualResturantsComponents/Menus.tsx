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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {itemCart} from '../../../redux/action/action';
function Menus({item}): React.JSX.Element {
  const [itemCount, setitemCount] = useState(0);
  const itemCartRedux = useSelector(state => state.itemCartReducer);

  const dispatch = useDispatch();
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 15,
      }}>
      <View style={{justifyContent: 'center', width: '50%'}}>
        <Image
          style={{height: 35, width: 35, backgroundColor: 'white'}}
          source={require('../../../assets/New-Non-Logo(1).png')}
        />
        <Text style={{fontSize: 18}}>
          {item.meals[0].strMeal}
          {/* {itemCount} */}
        </Text>
        <Text style={{fontSize: 15, marginVertical: 9}}>
          <FontAwesome size={15} color={'black'} name="rupee" />{' '}
          {item.meals[0].idMeal.slice(0, 3)}
        </Text>
        <Text style={{fontSize: 13, color: '#000000b5'}}>
          {item.meals[0].strInstructions.slice(0, 55) + ' .'}
        </Text>
      </View>
      <View>
        <Image
          style={{height: 150, aspectRatio: 1 / 1, borderRadius: 15}}
          source={{uri: item.meals[0].strMealThumb}}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            borderRadius: 5,
            backgroundColor: '#fddbde',
            bottom: 14,
          }}>
          <TouchableOpacity
            onPress={() => {
              if (itemCount > 0) {
                setitemCount(itemCount - 1);
                dispatch(itemCart({item: item, quantity: itemCount - 1}));
              }
            }}>
            <Text
              style={{
                fontSize: 22,
                color: 'red',
                fontWeight: 'bold',
                // backgroundColor: 'red',
                paddingHorizontal: 10,
              }}>
              -
            </Text>
          </TouchableOpacity>
          <Text
            onPress={() => {
              console.log(itemCartRedux);
            }}
            style={{fontSize: 22, color: 'red', fontWeight: 'bold'}}>
            {itemCount==0?"ADD":itemCount}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setitemCount(itemCount + 1);
              dispatch(itemCart({item: item, quantity: itemCount + 1}));
            }}>
            <Text
              style={{
                fontSize: 22,
                color: 'red',
                fontWeight: 'bold',
                // backgroundColor: 'red',
                paddingHorizontal: 10,
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({});

export default Menus;
