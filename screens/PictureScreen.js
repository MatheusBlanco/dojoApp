import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import SwipeCards from '../components/SwipeCard.js'

export default function PictureScreen() {
  return (
    <View style={styles.container}>
      
      
    </View>
  );
}

PictureScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigationFilename: {
    marginTop: 5,
  }
});
