import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    width: '100%'
  },
  backgroundimage:{
    width: '100%',
    height: 200,
    backgroundColor: 'black',
    opacity: 0.7
  },
  content: {
    padding: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    width: '90%', 
    textTransform: 'uppercase',
  },
  category: {
    color: '#4a90e2',
    fontSize: 10,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: 'dimgrey'
  },
  options: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    position: 'absolute',
    zIndex: 100,
    width: '100%'
  }
});

export default styles;