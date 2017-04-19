/**
 * 头部组件
 *
 * by zhangdi 02/13/2017
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'



import styles from './style'

export default class Header extends Component {

	static propTypes = {

		title: React.PropTypes.string,
		color: React.PropTypes.string,
		background: React.PropTypes.string,
		border: React.PropTypes.object,
		shadow: React.PropTypes.object
	}

	static defaultProps = {

		color: '#fff',
		background: '#ff7c00',
		border: {},
		shadow: {}
	}

	render () {

		let items = React.Children.toArray(this.props.children),
			{ border, shadow } = this.props

		//TODO 位置判断
		let [ left, right ] = items

		return	<View style={
					[
						styles.container, { 
							backgroundColor: this.props.background, 
							borderWidth: border.width, 
							borderColor: border.color
						}
					]}>
					<View style={styles.left}>
						{left}
					</View>
					<View>
						<Text style={[styles.title, { color: this.props.color }]}>{this.props.title}</Text>
					</View>
					<View style={styles.right}>
						{right}
					</View>
				</View>
	}

	goBack () {

		const {navigator} = this.props

		if(navigator) {

			navigator.pop()
		}
	}
}

