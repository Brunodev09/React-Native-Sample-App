import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//App debugging in React Native --> http://localhost:8081/debugger-ui/
//Needs to press Control + M to actually reload the code and get data feedback

//===========Functional Components=============
//	static data, can't fetch data, easy

// const Header = () => {
// 	return <Text>Hey</Text>
// }

//===========Class Component===============
//	dynamic sources of data, user events, more code
//	class components needs render method that returns JSX

// class Header extends Component {
// 	render() {
// 		return <Text>Hey</Text>
// 	}
// }



class AlbumList extends Component {

	constructor(props) {
		super(props); //passing props to parent class constructor
		this.state = {albums: []}; //Remember from ReactJS states are one of the only things that make React re-renders. Using it to make App re renders when data is fetched from the get request
	}


	//	lifecycle functions that will be auto executed at some point. In this case when Comp is being mounted. Name is specific
	componentDidMount() {
		// console.log("Comp will mount now!");

		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({albums: response.data})); //Only way to MODIFY states into re-rendering

	}

	renderAlbums() {
		return this.state.albums.map(album => <AlbumDetail key={album.title} alb={album} />); //Should use a key property. key property must be unique. Boring requirement from React
	}


	render() {
		// console.log(this.state);
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>	
		);
	}

} //classes do not require ;

export default AlbumList;