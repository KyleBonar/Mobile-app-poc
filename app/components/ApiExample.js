'use strict'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import axios from 'axios'

import StatusBarBackground from './StatusBarBackground'
import GoToHome from './GoToHome'


class ApiExample extends Component {
	constructor(props) {
		super(props)

		this.state = { feed: undefined }
	}

	componentWillMount() {
		this.getApi()
	}

	getApi() {
		//example api to get some data back from
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
				{this.createListItems(this.state.feed)}
			</View>
		)
	}
}

module.exports = ApiExample