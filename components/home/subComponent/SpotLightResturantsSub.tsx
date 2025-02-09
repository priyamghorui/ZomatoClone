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

function SpotLightResturantsSub(): React.JSX.Element {
  const [favourite, setFavourite] = useState({name: 'hearto', color: 'white'});
  const dispatch = useDispatch();
  return (
    <Card
      style={{
        marginHorizontal: 25,
        marginVertical: 20,
        // aspectRatio: 1 / 2,
        width: 300,
      }}>
      <Card.Cover
        style={{opacity: 0.7, backgroundColor: 'black'}}
        source={require('../../../assets/resturonts01.jpg')}
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
            justifyContent: 'space-between',
          }}>
          <MaterialCommunityIcons
            name="crown-circle"
            size={30}
            color={'yellow'}
          />
          <TouchableOpacity
            onPress={() => {
              favourite.name == 'hearto'
                ? setFavourite({name: 'heart', color: 'red'})
                : setFavourite({name: 'hearto', color: 'white'});
              dispatch(favouriteItems({count: 1}));
            }}>
            <AntDesign
              name={favourite.name}
              size={30}
              color={favourite.color}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 18, color: 'white'}}>
              10% OFF up to $40
            </Text>
            <Text style={{fontSize: 23, color: 'white'}}>
              Pushpa Resturants
            </Text>
          </View>
          <View style={{display: 'flex', justifyContent: 'flex-end'}}>
            <View
              style={{
                backgroundColor: 'green',
                borderRadius: 6,
                padding: 4,
                paddingHorizontal: 6,
                height: 30,
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
      </View>
    </Card>
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

export default SpotLightResturantsSub;
