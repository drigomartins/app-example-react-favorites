import React, { Component } from 'react';

import { Text, ImageBackground, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-looped-carousel';
import styles from './styles';

export default class Gallery extends Component {
  render(){
    return(
      <>
        <Carousel
        style={{width: '100%', height: 180,marginLeft: 0}}
        arrows={true}
        autoplay={false}
        leftArrowText={'<'}
        rightArrowText={'>'}
        rightArrowStyle={styles.arrow}
        leftArrowStyle={styles.arrow}
        >
        { this.props.imagepost.map(item => 
          <TouchableOpacity key={item} onPress={() => {this.props.navigation.navigate('Single', { post: this.props.item, category: this.props.category })}} style={styles.blend}>
            <ImageBackground  source={{ uri: item }} style={styles.backgroundimage} />
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.desc}>{(this.props.description).slice(0, 56)} ...</Text>
          </TouchableOpacity>
        )}
        </Carousel>
      </>
    )
  }
}