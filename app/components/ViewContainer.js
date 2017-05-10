import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'

class ViewContainer extends Component {
	render() {
		return (
			<View style={styles.viewContainer}>
				{this.props.children}
			</View>
		)
	}
}

const styles = StyleSheet.create({

	viewContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "stretch",
		backgroundColor: "#e8e8e8"
	}

})

module.exports = ViewContainer