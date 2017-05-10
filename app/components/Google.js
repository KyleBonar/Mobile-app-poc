'use strict'
import React, { Component } from 'react'
import { Text, View, WebView } from 'react-native'

import StatusBarBackground from './StatusBarBackground'
import GoToHome from './GoToHome'

class Google extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<View style={{flex:1}}>
				<StatusBarBackground></StatusBarBackground>
				<GoToHome navigator={this.props.navigator} name={this.props.name}></GoToHome>
				<WebView
					source={{uri: 'https://google.com'}}
				/>
			</View>
		)
	}
}

module.exports = Google