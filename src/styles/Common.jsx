

import { StyleSheet } from 'react-native';


export const commonStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'white',
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
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: '#12C660',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
