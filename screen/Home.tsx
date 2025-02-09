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
import {Searchbar, Surface} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Offers from '../components/home/Offers';
import SearchPanel from '../components/home/SearchPanel';
import HomeMenu from '../components/home/HomeMenu';
import SpotLightResturounts from '../components/home/SpotLightResturounts';
import AllResturants from '../components/home/AllResturants';
import FilterResturants from '../components/home/FilterResturants';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Home(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={{backgroundColor:"#fff"}}>
      <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[4]}>

      <SearchPanel />
      <Offers />
      <HomeMenu />
     

      <SpotLightResturounts />
     
      <FilterResturants/>
    

      <AllResturants/>
    
      
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
