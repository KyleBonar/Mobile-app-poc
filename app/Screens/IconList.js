'use strict'
import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Image, StyleSheet, ScrollView } from 'react-native'

import LandingText from '../Components/LandingText'
import StatusBarBackground from '../Components/StatusBarBackground'

class IconList extends Component {
	constructor(props){
		super(props)

		this.navigate = this.navigate.bind(this)
		this.getRoleSpecificMenu = this.getRoleSpecificMenu.bind(this)

		this.state = {
			role: undefined,
			allNavItems: [
				{
					name: "Dining",
					icon: require('../Images/dining_all_346x346.png'),
					isStudent: true,
					isStaff: true,
					isFaculty: true
				},
				{
					name: "Sponsors",
					icon: require('../Images/sponsors_346x346.png'),
					isStudent: false,
					isStaff: true,
					isFaculty: true
				},
				{
					name: "Printspot",
					icon: require('../Images/printspot_all_346x346.png'),
					isStudent: true,
					isStaff: true,
					isFaculty: true
				},
				{
					name: "News",
					icon: require('../Images/news_all_346x346.png'),
					isStudent: true,
					isStaff: true,
					isFaculty: false
				},
				{
					name: "Bookstore",
					icon: require('../Images/bookstore_all_346x346.png'),
					isStudent: true,
					isStaff: true,
					isFaculty: true
				},
				{
					name: "Emergency",
					icon: require('../Images/emergencynumbers_all_346x346.png'),
					isStudent: true,
					isStaff: true,
					isFaculty: true
				},
				{
					name: "Financial Aid",
					icon: require('../Images/financialaid_all_346x346.png'),
					isStudent: true,
					isStaff: false,
					isFaculty: false
				},
				{
					name: "Google",
					icon: require('../Images/google_logo_346x346.png'),
					isStudent: true,
					isStaff: true,
					isFaculty: true
				},
				{
					name: "Api Example",
					icon: require('../Images/api_346x346.png'),
					isStudent: true,
					isStaff: true,
					isFaculty: false
				}],

		}
	}
	
	//this will let us update the current role from undefined
	componentWillMount(){
		this.setState({role: this.props.role})
	}

	//this will push a new screen on top of the homepage
	navigate(name) {
		this.props.navigator.push({
			name
		})	
	}

	//generates a "menu" of icons based on the user's role
	getRoleSpecificMenu() {

		//filter array to grab only role-specific items, then iterate over remaining items to display actual icons and names
		return ( this.state.allNavItems.filter( (item) => {
				return item['is' + this.state.role]
			}).map( (item) => {
				return (
					<TouchableOpacity
						key={item.name}
						onPress={() => this.navigate(item.name)}
						style={style.iconItem}
					>
						<View style={style.iconBox}>
							<Image
								style={style.icon}
								source={item.icon}
							/>
							<Text style={style.iconText}>{item.name}</Text>
						</View>
					</TouchableOpacity>
				)
			})
		)

	}
	
	render() {
		return (
			<ScrollView>
				<StatusBarBackground></StatusBarBackground>
				<LandingText text={"ROWDYBOUND"} ></LandingText>

				<View style={style.iconContainer}>
					{this.getRoleSpecificMenu()}
				</View>

				<TouchableOpacity style={style.personaBox} onPress={this.navigate.bind(null, "PersonaView")}>
					<Text style={[style.personaText, {paddingLeft: 10}]}>Change your role!</Text>
					<Text style={style.personaRole}>(Currently: {this.state.role})</Text>
					<Text style={[style.personaText, {paddingRight: 10}]}>></Text>
				</TouchableOpacity>
			</ScrollView>

		)
	}
}

const style = StyleSheet.create({
	iconContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		flexWrap: "wrap"

	},
	iconBox: {
		flexDirection: "column",
		alignItems: "center",
		width: 85
		
	},
	iconItem: {
		marginBottom: 10,
	},
	icon: {
		width: 85,
		height: 85,
	},
	iconText: {
		fontSize: 16
	},

	personaBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#f5f5f5",
		paddingTop: 10,
		paddingBottom: 10
	},
	personaText: {
		fontSize: 16,
	},
	personaRole: {
		fontSize: 14
	}
})

module.exports = IconList
