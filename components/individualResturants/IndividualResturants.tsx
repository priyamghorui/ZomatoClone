/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
  Animated,
  Button,
  useWindowDimensions,
  Dimensions,
} from 'react-native';

import {Card, Surface} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native';
import Header from './subIndividualResturantsComponents/Header';
import Details from './subIndividualResturantsComponents/Details';
import FilterMenu from './subIndividualResturantsComponents/FilterMenu';
import Menus from './subIndividualResturantsComponents/Menus';
import {useSelector} from 'react-redux';
import CartDrawer from './subIndividualResturantsComponents/CartDrawer';
import LottieView from 'lottie-react-native';

function IndividualResturants(): React.JSX.Element {
  const navigation = useNavigation();
  const itemCartCount = useSelector(state => state.itemCartReducer);
  const translateY = useRef(new Animated.Value(100)).current; // Start from 300px down
  const [mealData, setmealData] = useState([]);
  const [isloding, setisloding] = useState(true);
  const getMeal = async () => {
    let aa = [];
    for (let step = 0; step <= 3; step++) {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php',
      );
      const data = await response.json();
      console.log(data);
      aa.push(data);
    }
    setmealData(aa);
    setisloding(false);
  };
  useEffect(() => {
    getMeal();
  }, []);
  useEffect(() => {
    if (itemCartCount.length != 0) {
      Animated.timing(translateY, {
        toValue: 0, // Move to the normal position
        duration: 500, // Animation duration (500ms)
        useNativeDriver: true, // Use native driver for better performance
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 100, // Move to the normal position
        duration: 500, // Animation duration (500ms)
        useNativeDriver: true, // Use native driver for better performance
      }).start();
    }
  }, [itemCartCount]);
  return (
    <View style={{backgroundColor: '#fff'}}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Details />
        {/* <Text
          onPress={() => {
            console.log(itemCartCount);
          }}>
          helo
        </Text> */}

        <FilterMenu />
        {/* <Text
          onPress={() => {
            // getMeal();
          }}>
          helo
        </Text> */}
        {isloding == true ? (
          <View
            style={{height: Dimensions.get('screen').height, paddingTop: 150}}>
            <LottieView
              style={{height: 100}}
              source={require('../../assets/animation/Animation1.json')}
              autoPlay
              // speed={1}
            />
          </View>
        ) : (
          <View style={{marginBottom: 40}}>
            {mealData.map((item, key) => (
              <View
                key={key}
                style={{borderBottomColor: '#A59D84', borderBottomWidth: 0.5}}>
                <Menus item={item} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      <Animated.View
        style={{
          transform: [{translateY}],
          position: 'absolute',
          top: Dimensions.get('screen').height - 105,
        }}>
        <View style={{width: Dimensions.get('screen').width}}>
          <CartDrawer />
        </View>
      </Animated.View>
    </View>
  );
}

export default IndividualResturants;
