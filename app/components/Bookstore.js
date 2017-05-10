'use strict'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

import StatusBarBackground from './StatusBarBackground'
import GoToHome from './GoToHome'

class Bookstore extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<View>
				<StatusBarBackground></StatusBarBackground>
				<GoToHome navigator={this.props.navigator} name={this.props.name}></GoToHome>
				<Text> This is from Bookstore</Text>
			</View>
		)
	}
}

module.exports = Bookstore