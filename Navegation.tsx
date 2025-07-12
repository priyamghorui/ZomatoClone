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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, NavigationContainer, useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store/store';
import Cart from './screen/Cart';
import CheckOut from './screen/CheckOut';
import Favourite from './screen/Favourite';
import IndividualResturantsScreen from './screen/IndividualResturantsScreen';
import { CheckOutDone } from './screen/CheckOutDone';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBarNavegation() {
  const itemCartCount = useSelector(state => state.itemCartReducer);
  const favouriteItemCount = useSelector(state => state.favouriteItemsReducer);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialIcons name="delivery-dining" size={30} color={color} />
            );
          },
        }}
        name="Delivery"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="favorite" size={30} color={color} />;
          },
          tabBarBadge: favouriteItemCount,
          tabBarBadgeStyle: {backgroundColor: '#607D8B'},
        }}
        name="Favourite"
        component={Favourite}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => {
            return <Entypo name="shopping-bag" size={30} color={color} />;
          },
          tabBarBadge: itemCartCount.length,
          tabBarBadgeStyle: {backgroundColor: '#607D8B'},
        }}
        name="Cart"
        component={Cart}
      />
    </Tab.Navigator>
  );
}
function Navegation(): React.JSX.Element {
  
  return (
    
    <Provider store={store}>
      <NavigationContainer theme={{
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
}}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="TabBarNavegation" component={TabBarNavegation} />
          <Stack.Screen
            name="IndividualResturantsScreen"
            component={IndividualResturantsScreen}
          />
          <Stack.Screen name="CheckOut" component={CheckOut} />
          <Stack.Screen name="CheckOutDone" component={CheckOutDone} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default Navegation;
