'use strict'
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import axios from 'axios'

import StatusBarBackground from '../Components/StatusBarBackground'
import GoToHome from '../Components/GoToHome'


class ApiExample extends Component {
	constructor(props) {
		super(props)

		this.state = { feed: undefined }
	}

	componentWillMount() {
		//invoke api function
		this.getApi()
	}

	//function to call arbitrary api and create a view with response data
	getApi() {
		axios.get('https://randomuser.me/api/?results=50&nat=us')
			.then( (response) => {
				this.setState({
					feed: response.data.results
				})
			})
			.catch(function (error) {
				console.log(error);
			});
	}


	createListItems(items) {
		if(items != undefined) {
			return (items.map( (item, index) => {
				if(item.id.value) {
					return (
						<TouchableOpacity key={item.id.value} style={styles.personRow}>
							<Image style={styles.personImage} source={{uri: item.picture.thumbnail}} />
							<View style={styles.personInformation}>
								<Text style={styles.personFullName}>{item.name.first} {item.name.last}</Text>
								<Text style={styles.personEmail}>{item.email}</Text>
								<Text sytle={styles.personPhone}>{item.phone}</Text>

							</View>
						</TouchableOpacity>
					)
				}
			}))
		} else {
			return <Text style={{textAlign: "center"}}>Loading...</Text>
		}
	}

	render() {
		return(
			<View>
				<StatusBarBackground></StatusBarBackground>
				<GoToHome navigator={this.props.navigator} name={this.props.name}></GoToHome>
				<Text style={{textAlign: "center"}}>Example Directory</Text>
				<ScrollView>
					{this.createListItems(this.state.feed)}
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	personRow: {
		flexDirection: "row",
		justifyContent: "flex-start",
		marginBottom: 10
	},
	personImage: {
		height: 40,
		width: 40,
		borderRadius: 20,
		marginTop: 5,
	},
	personInformation:{
		marginLeft: 10,
		flexDirection: "column",
		borderBottomWidth: 1,
		borderBottomColor: "#515151",
		paddingBottom: 2,
		flexGrow: 1

	},
	personFullName: {

	},
	personEmail: {

	},
	personPhone: {

	}
})

module.exports = ApiExample