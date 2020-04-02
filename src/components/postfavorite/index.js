import React, { Component } from 'react';

import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
import Carousel from 'react-native-looped-carousel';

export default class Postfavorite extends Component {
    
    render(){
        return(
            <View>
                <Text style={[styles.category]}>{this.props.category}</Text>
                <View style={{width: '100%'}}>

                        <Carousel
                        style={{width: '100%', height: 180,marginLeft: 0}}
                        arrows={true}
                        autoplay={false}
                        leftArrowText={'<'}
                        rightArrowText={'>'}
                        rightArrowStyle={styles.arrow}
                        leftArrowStyle={styles.arrow}
                        >
                        { this.props.galery.map(item => 
                          <TouchableOpacity key={item} onPress={() => {this.props.navigation.navigate('Singlefavorite', { category: this.props.category, title: this.props.title, description:this.props.description, image:item })}} style={styles.blend}>
                            <ImageBackground  source={{ uri: item }} style={styles.backgroundimage} />
                            <Text style={[styles.title]}>{this.props.title}</Text>
                            <Text style={[styles.desc]}>{(this.props.description).slice(0, 56)} ...</Text>
                          </TouchableOpacity>
                        )}
                        </Carousel>

                </View>
            </View>
        )
    }
}