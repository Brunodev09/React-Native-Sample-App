import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({alb}) => { //Inside props -> alb

	// When we reference one object inside a prop multiple times is good practice to dismember it
	 const {title, artist, image, thumbnail_image, url} = alb; //Getting title, artist and thumbnail from the object props.album that is already dismembered in the constructor parameter entry
	 const {headerTextStyle, thumbnailContainerStyle, headerContentStyle, thumbnailStyle, imageStyle} = styles;

	return(
		<Card>

			<CardSection>

				<View style={thumbnailContainerStyle}>
					<Image style={thumbnailStyle} source={{uri:thumbnail_image}} />
				</View>

				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>

			</CardSection>


			<CardSection>
				<Image style={imageStyle} source={{uri: image}} />
			</CardSection>

			<CardSection>
				<Button whenPress={() => Linking.openURL(url)}> 
					Buy now!
				</Button>
			</CardSection>

		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;