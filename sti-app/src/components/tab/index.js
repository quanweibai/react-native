/**
 * tab组件
 *
 * by zhangdi 02/13/2017
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './style'
import Home from '../../pages/home'
import Chart from '../../pages/chart'
import User from '../../pages/user'

export default class Tab extends Component {

	render() {

		return	<View style={styles.container}>
					<TouchableOpacity onPress={this.goHome.bind(this)}>
				  		<Icon name="home" style={[styles.home, this.props.route.name === 'home' && styles.active]} />
					</TouchableOpacity>
					<TouchableOpacity onPress={this.goChart.bind(this)}>
				  		<Icon name="area-chart" style={[styles.home, this.props.route.name === 'chart' && styles.active]} />
					</TouchableOpacity>
					<TouchableOpacity onPress={this.goUser.bind(this)}>
						<Icon name="user" style={[styles.usr, this.props.route.name === 'user' && styles.active]} />
					</TouchableOpacity>
				</View>
	}

	goHome() {

		const {navigator} = this.props

		if(navigator) {

			navigator.resetTo({

				name: 'home',
				component: Home
			})
		}
	}

	goChart() {
		
		const {navigator} = this.props

		if(navigator) {

			navigator.resetTo({

				name: 'chart',
				component: Chart
			})
		}
	}

	goUser() {

		const {navigator} = this.props

		if(navigator) {
			
			navigator.resetTo({

				name: 'user',
				component: User
			})
		}
	}
}