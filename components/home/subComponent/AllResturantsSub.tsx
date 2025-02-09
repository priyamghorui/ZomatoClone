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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {favouriteItems} from '../../../redux/action/action';

function AllResturantsSub(): React.JSX.Element {
  const [favourite, setFavourite] = useState({name: 'hearto', color: 'white'});
  const dispatch = useDispatch();
  return (
    <View
      style={{
        marginHorizontal: 25,
        marginVertical: 20,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: '#e5e5e5',
        paddingBottom: 10,
      }}>
      <Card.Cover
        style={{opacity: 0.7, backgroundColor: 'black'}}
        source={require('../../../assets/the-decor-of-aaheli-the.jpg')}
      />
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 19,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => {
              favourite.name == 'hearto'
                ? setFavourite({name: 'heart', color: 'red'})
                : setFavourite({name: 'hearto', color: 'white'});
              dispatch(favouriteItems({count: 1}));
            }}
            style={{}}>
            <AntDesign
              name={favourite.name}
              size={30}
              color={favourite.color}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{left: 9}}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{margin: 15}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 25}}>Pushpa Resturants</Text>
          <View style={{display: 'flex', justifyContent: 'flex-end'}}>
            <View
              style={{
                backgroundColor: 'green',
                borderRadius: 6,
                padding: 4,
                paddingHorizontal: 6,
                // height: 30,
              }}>
              <Text
                style={{
                  color: 'white',
                  display: 'flex',
                  alignContent: 'center',
                }}>
                4.3 <AntDesign name="star" size={15} color={'white'} />
              </Text>
            </View>
          </View>
        </View>
        <Text style={{fontSize: 15}}>Details</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  imges: {
    height: 150,
    width: 150,
    margin: 15,
    borderRadius: 20,
    // elevation: 10,
  },
});

export default AllResturantsSub;
