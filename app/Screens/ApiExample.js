'use strict'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import axios from 'axios'

import StatusBarBackground from '../Components/StatusBarBackground'
import GoToHome from '../Components/GoToHome'
import SearchBar from '../Components/SearchBar'

class ApiExample extends Component {
	constructor(props) {
		super(props)

		this.state = { 
			feed: undefined,
			numResults: 25,
			nationality: 'us',
			refresing: false,
			error: null
		}
	}

	componentWillMount() {
		//invoke api function
		this._getApi()
	}

	//function to call arbitrary api and create a view with response data
	_getApi() {
		axios.get('https://randomuser.me/api/?results=' + this.state.numResults + '&nat=' + this.state.nationality)
			.then( (response) => {
				this.setState({
					feed: response.data.results,
					error: response.error || null,
					loading: false,
					refreshing: false
				})
			})
			.catch(function (error) {
				this.setState({
					error: error,
					loading: false
				})
			});
	}


	_createListItems({item}) {
		return (
			<TouchableOpacity style={styles.personRow}>
				<Image style={styles.personImage} source={{uri: item.picture.thumbnail}} />
				<View style={styles.personInformation}>
					<Text style={styles.personFullName}>
						{item.name.first} {item.name.last}
					</Text>
					<Text style={styles.personEmail}>
						{item.email}
					</Text>
					<Text sytle={styles.personPhone}>
						{item.phone}
					</Text>

				</View>
			</TouchableOpacity>
		)						
	}

	_keyExtractor(item, index) {
		return (
			item.email
		)
	}

	_listHeader() {
		return(
			<SearchBar  />
		)
	}

	render() {
		return(
			<View style={{flex:1 }}>
				<StatusBarBackground></StatusBarBackground>
				<GoToHome navigator={this.props.navigator} name={this.props.name}></GoToHome>
				<Text style={{textAlign: "center"}}>Example Directory</Text>
				<View style={styles.scrollViewContainer}>
					<FlatList 
						data={ this.state.feed }
						renderItem={ this._createListItems }
						keyExtractor={ this._keyExtractor }
						ListHeaderComponent={ this._listHeader }
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	scrollViewContainer: {
		flexDirection: "column",
		flex: 1,
	},
	personRow: {
		flexDirection: "row",
		justifyContent: "flex-start",
		marginBottom: 10
	},
	personImage: {
		height: 40,
		width: 40,
		borderRadius: 20,
		marginTop: 5,
	},
	personInformation:{
		marginLeft: 10,
		flexDirection: "column",
		borderBottomWidth: 1,
		borderBottomColor: "#515151",
		paddingBottom: 2,
		flexGrow: 1

	},
	personFullName: {

	},
	personEmail: {

	},
	personPhone: {

	}
})

module.exports = ApiExample