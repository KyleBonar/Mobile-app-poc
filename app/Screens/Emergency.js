'use strict'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

import StatusBarBackground from '../Components/StatusBarBackground'
import GoToHome from '../Components/GoToHome'

class Emergency extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<View>
				<StatusBarBackground></StatusBarBackground>
				<GoToHome navigator={this.props.navigator} name={this.props.name}></GoToHome>
				<Text> This is from Emergency</Text>
			</View>
		)
	}
}

module.exports = Emergency