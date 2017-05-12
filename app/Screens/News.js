'use strict'
import React, { Component } from 'react'
import { Text, View, WebView } from 'react-native'

import StatusBarBackground from '../Components/StatusBarBackground'
import GoToHome from '../Components/GoToHome'

class News extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<View style={{flex:1}}>
				<StatusBarBackground></StatusBarBackground>
				<GoToHome navigator={this.props.navigator} name={this.props.name}></GoToHome>
				<Text> This is from news</Text>
			</View>
		)
	}
}

module.exports = News