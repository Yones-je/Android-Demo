import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import {TouchableOpacity} from 'react-native';

const BurgerNavButton = ({navigation}) => {
  const burgerNav = () => {
    navigation.toggleDrawer();
  };
  return (
    <TouchableOpacity onPress={burgerNav}>
      <Icon
        name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        size={40}
        color="black"
        style={{padding: 10}}
      />
    </TouchableOpacity>
  );
};
export default BurgerNavButton;
