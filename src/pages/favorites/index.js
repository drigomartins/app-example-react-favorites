import React, { Component } from 'react';

import { View, Text, Dimensions } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Topbar from '../../components/topbar';
import Post from '../../components/post';
import Postfavorite from '../../components/postfavorite';

import Favorite from '../../favorites';

export default class Favorites extends Component {
    state = {
        posts: [],
    };

    componentDidMount(){

        this.setState({posts: Favorite.getfavorites()});

        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
    
            this.setState({posts: Favorite.getfavorites()});
        });
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

  render(){
    return (
        <ScrollView>
            <Topbar navigation={this.props.navigation} />
            <ScrollView style={[styles.scrollview,{height: Dimensions.get('window').height - 48}]}>
                {(this.state.posts).length > 0 &&
                <>
                    { this.state.posts.map((item, index) => 
                    <Postfavorite key={index} category={item.category} title={item.title} galery={item.galery} description={item.description} navigation={this.props.navigation} />
                    )}
                </>
                }
                {(this.state.posts).length == 0 &&
                <>
                    <Text style={styles.message}>You don't have favorite posts!</Text>
                </>
                }
            </ScrollView>
        </ScrollView>
      )
  }
}