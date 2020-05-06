import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

export default class MessageCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card title="De: , Para: Beatriz">
        {/*react-native-elements Card*/}
          <Text style={styles.paragraph}>
            This is a card from the react-native-elements
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
