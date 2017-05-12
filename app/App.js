'use strict'
import React, { Component } from 'react'
import { Navigator } from 'react-native-deprecated-custom-components'

//to get phone-specific information
// var DeviceInfo = require('react-native-device-info');
// DeviceInfo.getUniqueID() //get Unique id

//reusable components
import LandingText from './Components/LandingText'
import StatusBarBackground from './Components/StatusBarBackground'
import ViewContainer from './Components/ViewContainer'

//specific screens
import IconList from './Screens/IconList'
import Dining from './Screens/Dining'
import Sponsors from './Screens/Sponsors'
import Printspot from './Screens/Printspot'
import News from './Screens/News'
import Bookstore from './Screens/Bookstore'
import Emergency from './Screens/Emergency'
import FinancialAid from './Screens/FinancialAid'
import PersonaView from './Screens/PersonaView'
import Google from './Screens/Google'
import ApiExample from './Screens/ApiExample'

class App extends Component {
	constructor(props) {
		super(props)
		this.updateRole = this.updateRole.bind(this)
		this.renderScene = this.renderScene.bind(this)	

		this.state = {
			role: "Staff"
		}
	}

	updateRole(newRole) {
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
			return <PersonaView navigator={navigator} name={"PersonaView"} role={this.state.role} updateRole={this.updateRole}/>
		} else if(route.name === 'Google') {
			return <Google navigator={navigator} name={"Google"} />
		} else if(route.name === 'ApiExample') {
			return <ApiExample navigator={navigator} name={"Api Example"} />
		}
	}

	render() {
		return(
			<ViewContainer>
				<Navigator initialRoute={{name: 'HomePage'}} renderScene={this.renderScene} />
			</ViewContainer>
		)
	}
}

module.exports = App