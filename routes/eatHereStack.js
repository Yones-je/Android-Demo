import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Menu from '../screens/menu';
import OrderStatus from '../screens/orderStatus';
import Payment from '../screens/payment';
import Header from '../components/header';
import HeaderDos from '../components/headerDos';
import takeAway from '../screens/takeAway';
import GoToCartButton from '../components/goToCartButton';
import Cart from '../screens/cart';
import BurgerNavButton from '../components/burgerNavButton';

const Stack = createStackNavigator();

export default function eatHereNavigator({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'yellow',
          height: 60,
        },
        headerTintColor: '#444',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => {
          return {
            headerLeft: () => {
              return <BurgerNavButton navigation={navigation} />;
            },
            headerRight: () => {
              return <GoToCartButton navigation={navigation} />;
            },
            headerTitle: () => <Header navigation={navigation} title="" />,
          };
        }}
      />
      <Stack.Screen
        name="takeAway"
        component={takeAway}
        options={({navigation}) => {
          return {
            headerBackTitleVisible: false,
            headerRight: () => {
              return <GoToCartButton navigation={navigation} />;
            },
            headerTitle: () => (
              <HeaderDos navigation={navigation} title="Take Away" />
            ),
          };
        }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={({navigation}) => {
          return {
            headerBackTitleVisible: false,
            headerRight: () => {
              return <GoToCartButton navigation={navigation} />;
            },
            headerTitle: () => (
              <HeaderDos navigation={navigation} title="Meny" />
            ),
          };
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({navigation}) => {
          return {
            headerBackTitleVisible: false,
            headerTitle: () => (
              <HeaderDos navigation={navigation} title="Beställning" />
            ),
          };
        }}
      />
      <Stack.Screen
        name="Pay"
        component={Payment}
        options={({navigation}) => {
          return {
            headerBackTitleVisible: false,
            headerTitle: () => <HeaderDos navigation={navigation} title=" " />,
          };
        }}
      />
      <Stack.Screen
        name="OrderStatus"
        component={OrderStatus}
        options={({navigation}) => {
          return {
            headerLeft: () => {
              return <BurgerNavButton navigation={navigation} />;
            },
            headerBackTitleVisible: false,
            headerTitle: () => (
              <HeaderDos navigation={navigation} title="Status" />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}
/* return {
    headerTitle: () => <Header navigation={navigation} title="Meny" />,
  };*/
