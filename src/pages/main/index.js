import React, { Component } from 'react';

import { View, Text, Button, ImageBackground, Image,FlatList, Dimensions, TouchableOpacity,ActivityIndicator } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Topbar from '../../components/topbar';
import Post from '../../components/post';

export default class Main extends Component {
    state = {
        posts: [],
    };

    componentDidMount(){
        fetch('https://cdn.joyjet.com/tech-interview/mobile-test-one.json')
        .then(response => response.json())
        .then((jsonData) => {
            this.setState({posts: jsonData});
        })
        .catch((error) => {
            console.error(error)
        })
    }

  render(){
    return (
        <ScrollView>
            <Topbar navigation={this.props.navigation} />
            <ScrollView style={[styles.scrollview,{height: Dimensions.get('window').height - 48}]}>
            {(this.state.posts).length > 0 &&
            <>
                { this.state.posts.map(item => 
                <Post key={item.category} category={item.category} items={item.items} navigation={this.props.navigation} />
                )}
            </>
            }
            {(this.state.posts).length == 0 && 
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#002864" />
            </View>
            }
            </ScrollView>
        </ScrollView>
      )
  }
}