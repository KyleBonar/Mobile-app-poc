'use strict'
import React, { Component } from 'react'
import { View, Text } from 'react-native'
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
		// axios.get
	}

	render() {
		return(
			<View>
				<StatusBarBackground></StatusBarBackground>
				<GoToHome navigator={this.props.navigator} name={this.props.name}></GoToHome>
				<Text> This is from Printspot</Text>
			</View>
		)
	}
}

module.exports = ApiExample