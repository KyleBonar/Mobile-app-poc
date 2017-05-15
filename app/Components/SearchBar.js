'use strict'
import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Image } from 'react-native'

class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			text: "",
			placeholder: "Search..."
		}
	}
	render() {
		return(
			<View style={styles.searchBarContainer}>
				<View style={styles.searchBarFake} >
					<Image
						source={require('../Images/search_346x346.png')}
						style={styles.searchIcon}
					/>
					<TextInput
						style={styles.searchBar}
						value={this.state.text}
						placeholder={this.state.placeholder}
						onChangeText={(text) => this.setState({text})}
						/>
				</View>
			</View>

		)
	}
}

const styles = StyleSheet.create({
	searchBarContainer: {
		backgroundColor: "#f3f3ff",
		borderWidth: 0,
	},
	searchBarFake: {
		backgroundColor: "#e8e8ee",
		flex: 1,
		borderRadius: 15,
		marginRight: 10,
		marginLeft: 10,
		marginTop: 10,
		marginBottom: 10,
		paddingTop: 6,
		paddingBottom: 6,
		flexDirection: "row"
	},
	searchIcon: {
		height: 20,
		width: 20,
		marginLeft: 10
	},
	searchBar: {	
		backgroundColor: "#e8e8ee",
		borderWidth: 0,
		height: 20,
		marginLeft: 10,
		marginRight: 20,
		flex: 1

	}
})

module.exports = SearchBar