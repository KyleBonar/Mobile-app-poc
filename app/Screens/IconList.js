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
					icon: require('../Images/google_logo_346x346.png'),
					isStudent: true,
					isStaff: true,
					isFaculty: false
				}],

		}
	}
	
	//this will let us update the current role from undefined
	componentWillMount(){
		let newRole = this.props.role
		this.setState({role: newRole})
	}

	//this will push a new screen on top of the homepage
	navigate(name) {
		this.props.navigator.push({
			name
		})	
	}

	//generates a "menu" of icons based on the user's role
	//TODO: Make the generation of menu iterate through an array of objects to cut down on repeatition
	getRoleSpecificMenu() {

	}
	
	render() {
		return (
			<ScrollView>
				<StatusBarBackground></StatusBarBackground>
				<LandingText text={"ROWDYBOUND"} ></LandingText>

				<TouchableOpacity style={style.personaBox} onPress={ () => this.navigate("PersonaView")}>
					<Text style={[style.personaText, {paddingLeft: 10}]}>Change your role!</Text>
					<Text style={style.personaRole}>(Currently: {this.props.role})</Text>
					<Text style={[style.personaText, {paddingRight: 10}]}>></Text>
				</TouchableOpacity>
			</ScrollView>

		)
	}
}

const style = StyleSheet.create({
	iconContainer: {
		flexDirection: "row",
		justifyContent: "space-around"

	},
	iconBox: {
		flexDirection: "column",
		alignItems: "center"
		
	},
	iconItem: {
		marginBottom: 10,
	},
	icon: {
		width: 90,
		height: 90,
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


		// 	if(role === "Student") {
		// 	return(
		// 		<View>
		// 			<View style={style.iconContainer}>
		// 				<TouchableOpacity onPress={() => this.navigate('Dining')} style={style.iconItem}>
		// 					<View style={style.iconBox}>
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/dining_all_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>Dining</Text>
		// 					</View>
		// 				</TouchableOpacity>
						
		// 				<TouchableOpacity onPress={() => this.navigate('Sponsors')} style={style.iconItem}>
		// 					<View style={style.iconBox}>
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/sponsors_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>Sponsors</Text>
		// 					</View>
		// 				</TouchableOpacity>

		// 				<TouchableOpacity onPress={() => this.navigate('Printspot')} style={style.iconItem}>
		// 					<View style={style.iconBox}>
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/printspot_all_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>Printspot</Text>
		// 					</View>
		// 				</TouchableOpacity>
		// 			</View>

		// 			<View style={style.iconContainer}>
		// 				<TouchableOpacity onPress={() => this.navigate('News')} style={style.iconItem}>
		// 					<View style={style.iconBox}>
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/news_all_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>News</Text>
		// 					</View>
		// 				</TouchableOpacity>

		// 				<TouchableOpacity onPress={() => this.navigate('Bookstore')} style={style.iconItem}>
		// 					<View style={style.iconBox}>
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/bookstore_all_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>Bookstore</Text>
		// 					</View>
		// 				</TouchableOpacity>

		// 				<TouchableOpacity onPress={() => this.navigate('Emergency')} style={style.iconItem}>
		// 					<View style={style.iconBox}>
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/emergencynumbers_all_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>Emergency</Text>
		// 					</View>
		// 				</TouchableOpacity>
		// 			</View>

		// 			<View style={style.iconContainer}>
		// 				<TouchableOpacity onPress={() => this.navigate('Financialaid')} style={style.iconItem}>
		// 					<View style={style.iconBox}>	
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/financialaid_all_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>Financial Aid</Text>
		// 					</View>
		// 				</TouchableOpacity>	

		// 				<TouchableOpacity onPress={() => this.navigate('Google')} style={style.iconItem}>
		// 					<View style={style.iconBox}>	
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/google_logo_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>Web View</Text>
		// 					</View>
		// 				</TouchableOpacity>		
		// 			</View>
		// 		</View>
		// 	)
		// } else if(role === "Staff") {
		// 	return (
		// 		<View>
		// 			<View style={style.iconContainer}>						
		// 				<TouchableOpacity onPress={() => this.navigate('Sponsors')} style={style.iconItem}>
		// 					<View style={style.iconBox}>
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/sponsors_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>Sponsors</Text>
		// 					</View>
		// 				</TouchableOpacity>

		// 				<TouchableOpacity onPress={() => this.navigate('News')} style={style.iconItem}>
		// 					<View style={style.iconBox}>
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/news_all_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>News</Text>
		// 					</View>
		// 				</TouchableOpacity>

		// 				<TouchableOpacity onPress={() => this.navigate('Bookstore')} style={style.iconItem}>
		// 					<View style={style.iconBox}>
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/bookstore_all_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>Bookstore</Text>
		// 					</View>
		// 				</TouchableOpacity>

		// 			</View>

		// 			<View style={style.iconContainer}>
		// 				<TouchableOpacity onPress={() => this.navigate('Emergency')} style={style.iconItem}>
		// 					<View style={style.iconBox}>
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/emergencynumbers_all_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>Emergency</Text>
		// 					</View>
		// 				</TouchableOpacity>

		// 				<TouchableOpacity onPress={() => this.navigate('Financialaid')} style={style.iconItem}>
		// 					<View style={style.iconBox}>	
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/financialaid_all_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>Financial Aid</Text>
		// 					</View>
		// 				</TouchableOpacity>	

		// 				<TouchableOpacity onPress={() => this.navigate('Google')} style={style.iconItem}>
		// 					<View style={style.iconBox}>	
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/google_logo_346x346.png')}
		// 						/>
		// 						<Text style={style.iconText}>Web View</Text>
		// 					</View>
		// 				</TouchableOpacity>	
		// 			</View>

		// 			<View style={style.iconContainer}>
		// 				<TouchableOpacity onPress={ () => this.navigate('ApiExample')} style={style.iconItem}>
		// 					<View style={style.iconBox}>
		// 						<Image
		// 							style={style.icon}
		// 							source={require('./images/api_346x346.png')}
		// 						/>
		// 						<Text>Api Example</Text>
		// 					</View>
		// 				</TouchableOpacity>
		// 			</View>
		// 		</View>
		// 	)
		// }

			// 		studentList: this.state.allNavItems.filter( function(item) { return item.showStudent}),
			// staffList: this.state.allNavItems.filter( function(item) { return item.showStaff}),
			// facultyList: this.state.allNavItems.filter( function(item) { return item.showFaculty})