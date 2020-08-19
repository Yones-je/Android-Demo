import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';

export default function header({navigation, title}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <Icon name="ios-menu" size={40} style={styles.icon} onPress={openMenu} />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/laneta-logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  headerText: {
    fontWeight: '900',
    fontSize: 30,
    fontFamily: 'Quicksand-Bold',
    color: '#333',
    letterSpacing: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 16,

  },
  headerImage: {
    width: 150,
    height: 103,
    marginLeft: 60,
    marginRight: 20,
    marginTop: 15,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
