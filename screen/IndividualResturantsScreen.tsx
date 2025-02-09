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
import IndividualResturants from '../components/individualResturants/IndividualResturants';


function IndividualResturantsScreen(): React.JSX.Element {

  return (
   <IndividualResturants/>
  );
}

export default IndividualResturantsScreen;
