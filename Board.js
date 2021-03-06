import React, { Component } from 'react';
import { Alert, Stylesheet, Text, TouchableOpacity, View } from 'react-native';

export default class Board extends Component {
	constructor(props){
		super(props);		
	}

	render() {
		const elements = this.props.tableData.map((row, rowIndex) => {
			return (
				<View style={style.row} key={rowIndex}>
					{
						row.map((cell, cellIndex) => {
							if(cell){
								return (
									<TouchableOpacity key={cellIndex}>
										<Text style={styles.cell}>{cell}</Text>
									</TouchableOpacity>
								)
							}
						return (
									<TouchableOpacity key={cellIndex} onPress={()=> this.props.takeTurn(rowIndex, cellIndex)}>
										<Text style={styles.cell}>{cell}</Text>
									</TouchableOpacity>
								)
			)
		})
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
		textAlign: 'center',
		lineHeight: 100,
	}
})