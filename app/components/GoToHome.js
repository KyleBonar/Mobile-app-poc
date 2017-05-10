'use strict'
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

class GoToHome extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<View style={styles.goToHomeBox } >
				<Text style={styles.screenName}>{this.props.name}</Text>
				<TouchableOpacity>
					<Text style={styles.goToHomeWord} onPress={ () => this.props.navigator.resetTo({name: "HomePage"}) }> Home </Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	goToHomeBox: {
		backgroundColor: '#0c2340',
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 10,
		paddingBottom: 10,
		marginBottom: 10,
	},
	goToHomeWord: {
		fontSize: 20,
		color: '#fff',
		fontWeight: "700"
	},
	screenName: {
		fontSize: 20,
		color: '#fff',
		fontWeight: "700",
		marginLeft: 10
	}

});

module.exports = GoToHome