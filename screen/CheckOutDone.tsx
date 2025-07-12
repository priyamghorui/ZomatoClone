import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';

export const CheckOutDone = () => {
      const navigate = useNavigation();
  return (
    <View style={{height: Dimensions.get('screen').height, paddingTop: 50}}>
     
        <LottieView
          style={{height: 300}}
          source={require('../assets/animation/cooking.json')}
          autoPlay
          // speed={1}
        />
        <LottieView
          style={{height: 100}}
          source={require('../assets/animation/check-mark.json')}
          autoPlay
          // speed={1}
        />

      <TouchableOpacity
        onPress={() => {
          navigate.navigate('TabBarNavegation');
        }}>
        <Button
          mode="contained"
          style={{
            backgroundColor: 'green',
            borderRadius: 9,
            padding: 5,
            margin: 90,
          }}>
          <Text style={{fontSize: 18}}>Payment</Text>
        </Button>
      </TouchableOpacity>
    </View>
  );
};
