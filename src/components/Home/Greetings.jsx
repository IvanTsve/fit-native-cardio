import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Greetings() {
    const hours = new Date().getHours();
  return (
    <View style={styles.container}>
      <Text style={[commonStyles.title, {textAlign: 'left'}]}>Good {hours < 12 ? 'morning' : 'afternoon'}</Text>
      <Text style={[commonStyles.subtitle, {textAlign: 'left'}]}>Ready to crush your fitness goals?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#12C660',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    gap: 10,
  }
});