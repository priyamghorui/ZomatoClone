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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function FilterResturants(): React.JSX.Element {
  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          color: 'gray',
          fontWeight: '500',
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        ALL RESTAURANTS
      </Text>
      <ScrollView horizontal style={{}}>
        <View
          style={{display: 'flex', flexDirection: 'row', marginVertical: 10}}>
          <View style={[style.cardStyle, style.sorting]}>
            <MaterialIcons name="sort" size={18} color={'black'} />
            <Text style={{marginHorizontal: 5}}>Sort</Text>
            <FontAwesome5 name="sort-down" size={20} color={'black'} />
          </View>
          <View style={style.cardStyle}>
            <Text>Great Offers</Text>
          </View>
          <View style={style.cardStyle}>
            <Text>Ratings 4.0+</Text>
          </View>
          <View style={style.cardStyle}>
            <Text>Ratings 4.0+</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  cardStyle: {
    borderRadius: 12,
    marginHorizontal: 9,
    borderColor: 'white',
    elevation: 10,

    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sorting: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'center',
  },
});

export default FilterResturants;
