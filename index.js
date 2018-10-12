/** @format */
import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import Card from './src/components/Card';


const App = () => (
	//we can add any properties we want. w/e name, like a CSS class or ID
	//Can only have one return like every valid function
	//Wrap up tags in a View tag to return multiple childs
	//Must add flex:1 whenever we want scrollable content
	<View style={{flex:1}}>
		<Header headerText={"Trending App"} />
		<AlbumList />
	</View>
	);

//renders to the device screen
//only root uses AppRegistry
AppRegistry.registerComponent('first', () => App);
