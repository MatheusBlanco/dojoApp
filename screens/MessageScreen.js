import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MessageCard from '../components/MessageCard'

export default function MessageScreen() {
  return (
    <ScrollView >
      <MessageCard />
    </ScrollView>
  );
}

