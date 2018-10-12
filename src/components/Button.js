import React from 'react';
import {Text, TouchableOpacity} from 'react-native';



const Button = ({whenPress, children}) => {

	const {buttonStyle, textStyle} = styles;

	return (
		<TouchableOpacity onPress={whenPress} style={buttonStyle}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};
//onPress is also arbitrary
//flex:1 --> takes as much space as it possibly can on device screen
const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};

export default Button;