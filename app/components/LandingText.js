'use strict'
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class LandingText extends Component {
	render() {
		return (
			<View style={styles.landingTextContainer}>
				<Text style={styles.landingText}>{this.props.text}</Text>
			</View>		
		)
	}
}

const styles = StyleSheet.create({
	landingTextContainer: {
		backgroundColor: "rgba(12,35,64,1)",
		paddingTop: 10,
		paddingBottom: 10,
		marginBottom: 10,
		flexDirection: "row",
		justifyContent: "center"

	},
	landingText:{
		fontSize: 20,
		color: "#fff",
		fontWeight: '700'
	}
})

module.exports = LandingText