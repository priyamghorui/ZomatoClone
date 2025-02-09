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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Card, Surface} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeMenu(): React.JSX.Element {
  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          color: 'gray',
          fontWeight: '500',
          paddingTop:15,
        }}>
        WHAT'S ON YOUR MIND ?{' '}
      </Text>
      <ScrollView horizontal>
        <View style={{alignItems: 'center'}}>
          <Image
            style={style.imges}
            resizeMode="stretch"
            source={require('../../assets/bowl-biryani-with-chicken-pieces-transparent-background_84443-1317-removebg-preview.png')}
          />
          <Text style={{fontSize: 15}}>Biryani</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={style.imges}
            resizeMode="stretch"
            source={require('../../assets/images-removebg-preview.png')}
          />
          <Text style={{fontSize: 15}}>Fried Rice</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={style.imges}
            resizeMode="stretch"
            source={require('../../assets/images-_3_-removebg-preview.png')}
          />
          <Text style={{fontSize: 15}}>Chicken Roll</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={style.imges}
            resizeMode="stretch"
            source={require('../../assets/pngtree-roast-chicken-png-image_2445525-removebg-preview.png')}
          />
          <Text style={{fontSize: 15}}>Fried Rice</Text>
        </View>
      </ScrollView>
      <ScrollView horizontal>
        <View style={{alignItems: 'center'}}>
          <Image
            style={style.imges}
            resizeMode="stretch"
            source={require('../../assets/download.jpg')}
          />
          <Text style={{fontSize: 15}}>Paneer</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={style.imges}
            resizeMode="stretch"
            source={require('../../assets/download-_1_.jpg')}
          />
          <Text style={{fontSize: 15}}>Rice Thali</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={style.imges}
            resizeMode="stretch"
            source={require('../../assets/mutton-curry-on-a-plate-isolated-on-a-transparent-background-png.jpg')}
          />
          <Text style={{fontSize: 15}}>Mutton Curry</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={style.imges}
            resizeMode="stretch"
            source={require('../../assets/b7cc32ed8da243b090575899ff5d036e.jpg')}
          />
          <Text style={{fontSize: 15}}>Soup</Text>
        </View>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  imges: {
    height: 100,
    // width: 100,
    // margin: 7,
    // borderRadius: 20,
    // elevation: 10,
    aspectRatio: 1,
  },
});

export default HomeMenu;
