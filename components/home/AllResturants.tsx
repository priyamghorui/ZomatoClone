/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AllResturantsSub from './subComponent/AllResturantsSub';
import {useNavigation} from '@react-navigation/native';
import SearchPanel from './SearchPanel';
import Offers from './Offers';
import HomeMenu from './HomeMenu';
import SpotLightResturounts from './SpotLightResturounts';
import FilterResturants from './FilterResturants';
const ResturantsIndevisual = React.memo(({item, navigation}) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('IndividualResturantsScreen');
    }}>
    <AllResturantsSub
      name={item.name}
      details={item.details}
      rate={item.rate}
      imgUri={item.imgUri}
    />
  </TouchableOpacity>
));
  const renderTopItems = () => (
    <>
      <SearchPanel />
      <Offers />
      <HomeMenu />
      <SpotLightResturounts />
      <FilterResturants />
    </>
  );

function AllResturants(): React.JSX.Element {
  const navigation = useNavigation();
  const resturants = [
    {
      id: '1',
      name: 'Adarsha kitchen',
      details: 'Close In : 11:00',
      rate: 4.2,
      imgUri:
        'https://cdn.prod.website-files.com/66456ff69b6aadbdb065af90/684ff40cb5ddb0029dfdb9fd_Banner.jpg',
    },
    {
      id: '2',
      name: 'Pushpa Resturants',
      details: 'Close In : 10:00',
      rate: 4.4,
      imgUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oBl8oMj8unCKsHx9WuzVKgxc34HJnei-Qw&s',
    },
    {
      id: '3',
      name: 'KFC',
      details: 'Close In : 11:00',
      rate: 4.1,
      imgUri:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/42/22/21/kfc-restaurant-tables.jpg?w=900&h=-1&s=1',
    },
  ];
  const renderItem = ({item}) => (
    <ResturantsIndevisual item={item} navigation={navigation} />
  );

  return (
    <View style={{marginBottom:60}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          color: 'gray',
          fontWeight: '500',
          paddingTop: 15,
        }}>
        FEATURED
      </Text>
      <FlatList
        data={resturants}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View />}
        initialNumToRender={1}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderTopItems}
      />
    </View>
  );
}

export default AllResturants;
