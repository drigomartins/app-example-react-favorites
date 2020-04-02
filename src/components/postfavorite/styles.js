import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    category: {
        color: 'white',
        backgroundColor: '#4a90e2',
        width: '100%',
        padding: 10
    },
    ocult: {
      width: 25
    },
    menu: {
      width: 25,
      height: 21
    },
    backgroundimage: {
        width: '100%', 
        height: '100%',
        opacity: 0.7,
        display: 'flex',
        position: 'absolute',
        zIndex: 10,
        margin: 0,
        padding:0
    },
    blend: {
        backgroundColor: 'black',
        paddingLeft:1
    },
    arrow: {
        padding: 5,
        color: 'white',
        fontSize: 25,
        opacity: 0.5
      },
    title: {
        position: 'relative',
        left: 35,
        top: 100,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        width: '90%', 
        textTransform: 'uppercase',
        zIndex: 100
    },
    desc: {
        position: 'relative',
        left: 35,
        right: 35,
        top: 100,
        color: 'white',
        fontSize: 14,
        width: '80%', 
        zIndex: 100
    },
});

export default styles;