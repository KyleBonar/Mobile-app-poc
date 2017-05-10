import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
var DeviceInfo = require('react-native-device-info');
// DeviceInfo.getUniqueID() //get Unique id

import ViewContainer from './app/components/ViewContainer'
import StatusBarBackground from './app/components/StatusBarBackground'
import LandingText from './app/components/LandingText'
import IconList from './app/components/IconList'
import Dining from './app/components/Dining'
import Sponsors from './app/components/Sponsors'
import Printspot from './app/components/Printspot'
import News from './app/components/News'
import Bookstore from './app/components/Bookstore'
import Emergency from './app/components/Emergency'
import FinancialAid from './app/components/FinancialAid'
import PersonaView from './app/components/PersonaView'
import Google from './app/components/Google'
import ApiExample from './app/components/ApiExample'



export default class AwesomeProject extends Component {
	constructor(props) {
		super(props)

		this.renderScene = this.renderScene.bind(this)
		this.setRole = this.setRole.bind(this)

		this.state = {
			role: "Staff"
		}
	}

	componentWillMount() {

	}

	setRole(newRole) {
		//update state with new role
		this.setState({
			role: newRole
		})

	}

	renderScene(route, navigator) {
		if(route.name === 'HomePage') {
			return <IconList navigator={navigator} role={this.state.role}/>
		} else if(route.name === 'Dining') {
			return <Dining navigator={navigator} name={"Dining"}/>
		} else if(route.name === 'Sponsors') {
			return <Sponsors navigator={navigator} name={"Sponsors"}/>
		} else if(route.name === 'Printspot') {
			return <Printspot navigator={navigator} name={"Printspot"}/>
		} else if(route.name === 'News') {
			return <News navigator={navigator} name={"News"}/>
		} else if(route.name === 'Bookstore') {
			return <Bookstore navigator={navigator} name={"Bookstore"}/>
		} else if(route.name === 'Emergency') {
			return <Emergency navigator={navigator} name={"Emergency"}/>
		} else if(route.name === 'Financialaid') {
			return <FinancialAid navigator={navigator} name={"Financial Aid"}/>
		} else if(route.name === 'PersonaView') {
			return <PersonaView navigator={navigator} name={"PersonaView"} role={this.state.role} setRole={this.setRole}/>
		} else if(route.name === 'Google') {
			return <Google navigator={navigator} name={"Google"} />
		} else if(route.name === 'ApiExample') {
			return <ApiExample navigator={navigator} name={"Api Example"} />
		}
	}

  	render() {
		return (
			<ViewContainer>
				<Navigator
					initialRoute={{name: 'HomePage'}}
					renderScene={this.renderScene}
				/>
			</ViewContainer>
		)
  	}
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);