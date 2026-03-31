import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonStyles } from '@/styles/Common';

const SETTINGS_ITEMS = [
  { id: 'notifications', label: 'Notifications' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'help', label: 'Help & Support' },
];

function SettingsRow({ label, onPress, isLast }) {
  return (
    <TouchableOpacity
      style={[styles.row, !isLast && styles.rowBorder]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
}

export default function Settings({ onLogout }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={commonStyles.sectionTitle}>Settings</Text>
        {SETTINGS_ITEMS.map((item, index) => (
          <SettingsRow
            key={item.id}
            label={item.label}
            onPress={() => {}}
            isLast={index === SETTINGS_ITEMS.length - 1}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={onLogout} activeOpacity={0.85}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.06)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  rowLabel: {
    fontSize: 15,
    color: '#222',
  },
  chevron: {
    fontSize: 22,
    color: '#C0C0C0',
    lineHeight: 24,
  },
  logoutButton: {
    backgroundColor: '#FFF0F0',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E53935',
  },
});
