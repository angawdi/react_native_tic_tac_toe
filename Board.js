import React, { Component } from 'react';
import { Alert, Stylesheet, Text, TouchableOpacity, View } from 'react-native';

export default class Board extends Component {
	constructor(props){
		super(props);		
	}

	takeTurn = (row, col) => {
		Alert.alert(`This is row ${row}, column ${col}`);
	}

	render() {
		const elements = this.props.tableData.map((row, rowIndex) => {
			return (
				<View style={style.row} key={rowIndex}>
					{
						row.map((cell, cellIndex) => {
							return (
								<TouchableOpacity key={cellIndex} onPress={()=> this.takeTurn(rowIndex, cellIndex)}>
									<Text style={styles.cell}>{cell}</Text>
								</TouchableOpacity>
							);
						})
					}
		});
		return(
			<View>
				{elements}
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