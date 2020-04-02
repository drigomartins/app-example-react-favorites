import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    topbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 10,
      paddingTop: 40,
      backgroundColor: 'white',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 11,
    },
    logo: {
        color: 'blue',
        fontSize: 17
    },
    ocult: {
      width: 25
    },
    menu: {
      width: 25,
      height: 21
    }
});

export default styles;