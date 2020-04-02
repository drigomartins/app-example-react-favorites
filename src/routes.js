import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Main from './pages/main/index';
import Single from './pages/single/index';
import Favorites from './pages/favorites/index';
import Singlefavorite from './pages/singlefavorite';

const url = "https://sac.xpro.me/";

const Route = createDrawerNavigator(
    {
        Home:Main,
        Favorites:Favorites,
        Single: {
            screen: Single,
            navigationOptions: {
                drawerLabel: ()=>null,
            }
        },
        Singlefavorite: {
            screen: Singlefavorite,
            navigationOptions: {
                drawerLabel: ()=>null,
            }
        },
    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: '#363636',
        contentOptions: {
            activeTintColor: '#DCDCDC',
            inactiveTintColor: '#DCDCDC',
        },
        drawerPosition: 'right'
    },
);

const Routes = createAppContainer(Route);

export default Routes;
