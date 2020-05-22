import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-360';

export default class travelVR extends React.Component {
  render() {
    const {
      mainView, 
      menuItem, 
      Shamika, 
      Kiesha, 
      Tara, 
      Shonda, 
      Sabrina, 
      Crystal } = styles 
    return (
      <View style={mainView}>
        <Text style = {menuItem}> Shamika</Text>
        <Text style = {menuItem}> Kiesha</Text>
        <Text style = {menuItem}> Tara</Text>
        <Text style = {menuItem}> Shonda</Text>
        <Text style = {menuItem}> Sabrina</Text>
        <Text style = {menuItem}> Crystal</Text>
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
    color: 'white', 
    textAlign: 'center'
  }, 
  poland: {
    backgroundColor: '#DC143C'
  },
  ukraine: {
    backgroundColor: '#FFD500'
  },
  uk: {
    backgroundColor: '#00247D'
  },
  spain: {
    backgroundColor: '#C60D1F'
  },
  italy: {
    backgroundColor: '#029246'
  },
  greece: {
    backgroundColor: '#0D5EAF'
  },
  redText: {
    color: 'red'
  }

});

AppRegistry.registerComponent('travelVR', () => travelVR);
