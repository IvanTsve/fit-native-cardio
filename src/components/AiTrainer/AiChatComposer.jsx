import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AiChatComposer({ onSend, placeholder = 'Ask your AI trainer…' }) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue('');
  };

  return (
    <View style={[styles.bar, focused && styles.barFocused]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#757575"
        style={styles.input}
        value={value}
        onChangeText={setValue}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onSubmitEditing={submit}
        returnKeyType="send"
        blurOnSubmit={false}
        multiline
      />
      <TouchableOpacity
        style={styles.sendBtn}
        onPress={submit}
        activeOpacity={0.85}
        accessibilityRole="button"
        accessibilityLabel="Send message"
      >
        <Ionicons name="send" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  barFocused: {
    borderColor: '#12C660',
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 120,
    fontSize: 16,
    color: '#000',
    paddingTop: 8,
    paddingBottom: 8,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#12C660',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
});
