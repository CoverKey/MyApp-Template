import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 27,
    fontWeight: '100',
    alignItems: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyApp Template</Text>
      <Text style={styles.text2}>I am really excited about this!</Text>
    </View>
  );
}
