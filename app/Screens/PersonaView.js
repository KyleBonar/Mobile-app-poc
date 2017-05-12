'use strict'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import StatusBarBackground from '../Components/StatusBarBackground'
import GoToHome from '../Components/GoToHome'

class PersonaView extends Component {
	constructor(props) {
		super(props)

		this.navigate = this.navigate.bind(this)

		this.state = {
			role: undefined
		}
	}

	componentWillMount() {
		let newRole = this.props.role
		this.setState({role: newRole})
	}

	//this will push a new screen on top of the homepage
	navigate(name) {
		this.props.navigator.resetTo({
			name
		})	
	}

	render() {
		return(
			<View>
				<StatusBarBackground></StatusBarBackground>
				<GoToHome navigator={this.props.navigator} name={this.props.name}></GoToHome>
				
				<TouchableOpacity
					style={style.personaBox}
					onPress={this.props.updateRole.bind(null, "Student")}
				>
					<Text style={style.personaChecked}>
						{this.props.role === "Student" ? "+    " : "       "}
					</Text>
					<Text style={style.personaText}>
						Student
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={style.personaBox}
					onPress={this.props.updateRole.bind(null, "Staff")}
				>
					<Text style={style.personaChecked}>
						{this.props.role === "Staff" ? "+    " : "       "}
					</Text>
					<Text style={style.personaText}>
						Staff
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={style.personaBox}
					onPress={this.props.updateRole.bind(null, "Faculty")}
				>
					<Text style={style.personaChecked}>
						{this.props.role === "Faculty" ? "+    " : "       "}
					</Text>
					<Text style={style.personaText}>
						Faculty
					</Text>
				</TouchableOpacity>

				<Text style={style.currentRole}>Current role: {this.props.role}</Text>
				
				<View style={style.goBackToHome}>
					<TouchableOpacity onPress={ this.props.navigator.resetTo.bind(null, {name: "HomePage"}) } >
						<Text style={style.goHome}>
							Home
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

}

const style = StyleSheet.create({
	personaBox: {
		flexDirection: "row",
		justifyContent: "flex-start",
		backgroundColor: "#f5f5f5",
		paddingTop: 10,
		paddingBottom: 10,
		marginBottom: 15,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: "#515151"
	},
	personaText: {
		fontSize: 16,
	},
	currentRole: {
		fontSize: 16
	},
	goBackToHome: {
		flexDirection: "row",
		justifyContent: "center",
	},
	goHome: {
		backgroundColor: "#0c2340",
		color: "#fff",
		fontWeight: "700",
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 5,
		paddingBottom: 5
	}
})

module.exports = PersonaView