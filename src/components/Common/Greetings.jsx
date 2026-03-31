import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { commonStyles } from '@/styles/Common';

export default function Greetings({ title, subtitle, showAvatar = false }) {
  return (
    <View style={[styles.container, showAvatar && styles.row]}>
      {showAvatar && (
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: 'https://placecats.com/100/100' }}
            style={styles.avatarImage}
          />
        </View>
      )}
      <View style={styles.textGroup}>
        <Text style={[commonStyles.title, { textAlign: 'left' }]}>{title}</Text>
        <Text style={[commonStyles.subtitle, { textAlign: 'left' }]}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#12C660',
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    gap: 10,
  },
  avatarWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  textGroup: {
    flex: 1,
    gap: 6,
  },
});