import React, { Component } from 'react';

import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Topbar from '../../components/topbar';

import Favorites from '../../favorites';

export default class Singlefavorite extends Component {
    state = {
        favorite: false,
    };

    componentDidMount(){

        if(Favorites.isfavoritepage(this.props.navigation.state.params.category, this.props.navigation.state.params.title) == true){
            this.setState({favorite: true});
        }

        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
    
            if(Favorites.isfavoritepage(this.props.navigation.state.params.category, this.props.navigation.state.params.title) == true){
                this.setState({favorite: true});
            }

        });
    }

    componentWillUnmount() {
        this.focusListener.remove();
        this.setState({favorite: false});
    }

    render(){
        return (
            <ScrollView>
                <Topbar navigation={this.props.navigation} />
                <ScrollView style={styles.scrollview}>
                    <View style={styles.options}>
                        <Icon
                            name='arrow-back'
                            type='material'
                            color='white'
                            onPress={() => this.props.navigation.navigate('Favorites')} />
                        {this.state.favorite == false &&
                        <Icon
                            name='star-border'
                            type='material'
                            color='white'
                            onPress={() => Favorites.setfavorites(this.props.navigation.state.params.category, this.props.navigation.state.params.title, this.props.navigation.state.params.post)} />
                        }
                        {this.state.favorite == true &&
                        <Icon
                            name='star'
                            type='material'
                            color='white'
                            onPress={() => {
                                Favorites.removefavorite(this.props.navigation.state.params.category, this.props.navigation.state.params.title)
                                this.setState({favorite: false});
                            }} />
                        }
                    </View>
                    <ImageBackground  source={{ uri: this.props.navigation.state.params.image }} style={styles.backgroundimage} />
                    <View style={styles.content}>
                        <Text style={styles.title}>{this.props.navigation.state.params.title}</Text>
                        <Text style={styles.category}>{this.props.navigation.state.params.category}</Text>
                        <Text style={styles.text}>{this.props.navigation.state.params.description}</Text>
                    </View>
                </ScrollView>
            </ScrollView>
        )
    }
}