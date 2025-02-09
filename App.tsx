/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Button, Flex} from '@ant-design/react-native';
import Home from './screen/Home';
import Navegation from './Navegation';
type SectionProps = PropsWithChildren<{
  title: string;
}>;
function App(): React.JSX.Element {
  return <Navegation />;
}

export default App;
