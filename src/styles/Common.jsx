

import { StyleSheet } from 'react-native';


export const commonStyles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#1d4ed8',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'stretch',        // center children horizontally
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',

  },
  inputWrapper: {
    width: '90%',
    marginTop: 16,
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#60a5fa',      // light blue
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#eff6ff',  // very light blue background
    fontSize: 16,
    color: '#0f172a',            // dark text
  },
  inputLabel: {
    marginBottom: 6,
    fontSize: 14,
    color: '#1d4ed8',            // main blue
    fontWeight: '600',
  },
  fancyButton: {

    backgroundColor: '#1d4ed8',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8b5cf6', // purple shadow like the logo
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6, // Android shadow
  },
  iconShadow: {
    backgroundColor: '#93c5fd',
    borderRadius: 85,
    padding: 15,
    marginBottom: 20,
    // Shadow for iOS
    shadowColor: '#8b5cf6', // purple
    shadowOffset: { width: 0, height: 20 }, // bigger shadow
    shadowOpacity: 0.35, // more visible
    shadowRadius: 26, // bigger shadow
    // Shadow for Android
    elevation: 20, // higher value for bigger shadow
  }
});
