import React, { Component } from 'react';

import { View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import styles from './styles';

export default class Topbar extends Component {
  render(){
    return(
        <View style={styles.topbar}>
            <View style={styles.ocult}></View>

            <Text style={[styles.logo]}>Digital Space</Text>
            
            <Icon name='menu' size={24} color='black'
            onPress={()=> this.props.navigation.toggleDrawer()}
            />
        </View>
    )
  }
}