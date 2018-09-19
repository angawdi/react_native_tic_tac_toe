import React, { Component } from 'react';
import { Stylesheet, Text, View } from 'react-native';

export default class Board extends Component {
	constructor(props){
		super(props);		
	}

	render() {
		return(
			<View>
				<Text>Board goes here</Text>
			</View>
		)
	}
}

const styles = Stylesheet.create({
	row: {
		height: 100,
		flexDirection: 'row',
	},
	cell: {
		minWidth: 100,
		fontSize: 30,
		borderColor: '#333',
		borderWidth: 1,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		lineHeight: 100,
	}
})