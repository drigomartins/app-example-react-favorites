import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    scrollview: {
      flex: 1,
      width: '100%'
    },
    message: {
      width: '100%',
      textAlign: 'center',
      padding: 20,
      color: 'dimgray'      
    }
});

export default styles;