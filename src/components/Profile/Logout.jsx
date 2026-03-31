import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Logout({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>Log Out</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF4D4D',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
