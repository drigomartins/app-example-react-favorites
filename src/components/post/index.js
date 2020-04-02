import React, { Component } from 'react';

import { View, Text } from 'react-native';
import styles from './styles';
import Gallery from '../gallery';

export default class Post extends Component {
    
    render(){
        return(
            <View>
                <Text style={[styles.category]}>{this.props.category}</Text>
                <View style={{width: '100%'}}>

                    { this.props.items.map(item => 
                        <Gallery key={item.title} item={item} category={this.props.category} title={item.title} description={item.description} imagepost={item.galery} navigation={this.props.navigation} />
                    )}

                </View>
            </View>
        )
    }
}