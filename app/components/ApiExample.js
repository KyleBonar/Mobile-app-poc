'use strict'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import axios from 'axios'

import StatusBarBackground from './StatusBarBackground'
import GoToHome from './GoToHome'


class ApiExample extends Component {
	constructor(props) {
		super(props)

		this.state = { feed: undefined }
	}

	componentWillMount() {
		//invoke api function
		this.getApi()
	}

	//function to call arbitrary api and create a view with response data
	getApi() {
		axios.get('https://jsonplaceholder.typicode.com/albums')
			.then( (response) => {
				this.setState({
					feed: response.data
				})
			})
			.catch(function (error) {
				console.log(error);
			});
	}


	createListItems(items) {
		if(items != undefined) {
			return (items.map( (item, index) => {
				return (
					<TouchableOpacity key={item.id}>
						<Text>{item.title}</Text>
					</TouchableOpacity>
				)
			}))
		} else {
			return <Text>Loading...</Text>
		}
	}

	render() {
		return(
			<View>
				<StatusBarBackground></StatusBarBackground>
				<GoToHome navigator={this.props.navigator} name={this.props.name}></GoToHome>
				<Text style={{textAlign: "center", fontSize: 18}}>This page connects to arbitrary API and displays data from it</Text>
				<ScrollView>
					{this.createListItems(this.state.feed)}
				</ScrollView>
			</View>
		)
	}
}

module.exports = ApiExample