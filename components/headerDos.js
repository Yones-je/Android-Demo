import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Dimensions} from 'react-native';

export default function headerDos({title}) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/laneta-logo.png')}
          style={styles.headerImage}
        />
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
    bottom: 2,
    right: 7,
  },
  headerImage: {
    width: 150,
    height: 103,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 35,
  },
});
