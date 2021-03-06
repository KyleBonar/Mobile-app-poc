'use strict'
import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'

class StatusBarBackground extends Component {
	render() {
		return (
			<View style={styles.statusBarBackground}>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	statusBarBackground: {
		height: (Platform.OS === 'ios') ? 20 : 0,
		backgroundColor: "white"
	}
})

module.exports = StatusBarBackground