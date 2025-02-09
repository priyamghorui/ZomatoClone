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


import {Searchbar, Surface} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function SearchPanel(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View>
      {/* <Surface > */}

      <Searchbar
        elevation={5}
        right={() => {
          return (
            <View
              style={{
                marginRight: 12,
                borderLeftWidth: 1,
                paddingLeft: 5,
                borderLeftColor: 'gray',
              }}>
              <MaterialCommunityIcons
                name="microphone-outline"
                size={30}
                color={'red'}
              />
            </View>
          );
        }}
        placeholder="Resturonts name or a dish...."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{
          borderRadius: 8,
          marginHorizontal: 15,
          marginVertical: 10,
          backgroundColor: '#fff',
        }}
        icon={() => {
          return <FontAwesome name="search" size={26} color={'red'} />;
        }}
      />
      {/* </Surface> */}
    </View>
  );
}

export default SearchPanel;
