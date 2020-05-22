import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-360';

export default class travelVR extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style = {styles.menuItem}> Shamika</Text>
        <Text style = {styles.menuItem}> Kiesha</Text>
        <Text style = {styles.menuItem}> Tara</Text>
        <Text style = {styles.menuItem}> Shonda</Text>
        <Text style = {styles.menuItem}> Sabrina</Text>
        <Text style = {styles.menuItem}> Crystal</Text>
        <Text style = {styles.menuItem}> Derhonda</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainView: {
    height: 600, 
    width: 600, 
    padding: 10, 
    backgroundColor: '#eee',
    alignItems: 'center', 
    justifyContent:'center'
  }, 
  menuItem: {
    fontSize: 40, 
    width: '50%', 
    marginTop: 5, 
    backgroundColor: '#0298D0',
    color: 'white'

  }

});

AppRegistry.registerComponent('travelVR', () => travelVR);
