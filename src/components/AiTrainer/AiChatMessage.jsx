import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AiChatMessage({ role, text }) {
  const isUser = role === 'user';

  return (
    <View style={[styles.row, isUser && styles.rowUser]}>
      {!isUser && (
        <View style={styles.avatar}>
          <Ionicons name="sparkles" size={18} color="#12C660" />
        </View>
      )}
      <View style={[styles.bubble, isUser ? styles.bubbleUser : styles.bubbleAssistant]}>
        <Text style={[styles.body, isUser && styles.bodyUser]}>{text}</Text>
      </View>
      {isUser && (
        <View style={[styles.avatar, styles.avatarUser]}>
          <Ionicons name="person" size={18} color="#fff" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
    marginBottom: 14,
    alignSelf: 'flex-start',
    maxWidth: '100%',
  },
  rowUser: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#ecfdf3',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#bbf7d0',
  },
  avatarUser: {
    backgroundColor: '#12C660',
    borderColor: '#12C660',
  },
  bubble: {
    maxWidth: '78%',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 16,
  },
  bubbleAssistant: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  bubbleUser: {
    backgroundColor: '#12C660',
  },
  body: {
    fontSize: 15,
    color: '#111827',
    lineHeight: 22,
  },
  bodyUser: {
    color: '#fff',
  },
});
