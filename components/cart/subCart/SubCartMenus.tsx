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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';

function SubCartMenus({data}): React.JSX.Element {
  const [itemCount, setitemCount] = useState(0);
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
          source={require("../../../assets/New-Non-Logo(1).png")}
        />
        <Text style={{fontSize: 18}} onPress={()=>{console.log(data.item.meals[0].strMeal);
        }}>aa</Text>
        <Text style={{fontSize: 15, marginVertical: 9}}>$ {Math.floor(Math.random()*20)} </Text>
        <Text style={{fontSize: 13, color: '#000000b5'}}>
      
        </Text>
      </View>
      <View>
        <Image
          style={{height: 150, aspectRatio: 1 / 1, borderRadius: 15}}
          source={require("../../../assets/New-Non-Logo(1).png")}

        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginHorizontal: 20,
            borderRadius: 5,
            backgroundColor: '#fddbde',
            bottom: 14,
          }}>
          <TouchableOpacity
            onPress={() => {
              
              if (itemCount > 0) {
                setitemCount(itemCount - 1);
              }
            }}>
            <Text style={{fontSize: 22, color: 'red', fontWeight: 'bold'}}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 22, color: 'red', fontWeight: 'bold'}}>
            ADD
          </Text>
          <TouchableOpacity
            onPress={() => {
              setitemCount(itemCount + 1);
            }}>
            <Text style={{fontSize: 22, color: 'red', fontWeight: 'bold'}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({});

export default SubCartMenus;
