/**
 *
 * created by zhangdi 02/13/2017
 *
 * TouchableHighlight 多用于制作按钮或连接
 * TouchableOpacity 按钮按下活减低透明度
 * TouchableWithoutFeedback 按下没有任何效果
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import styles from './style'
import Article from '../../pages/article'

const NEXT_PAGE = {

  name: 'article',
  component: Article,
  props: {

  	name: '',
  	url: ''
  }
}

export default class Item extends Component {

	render () {

		return	<TouchableOpacity style={styles.item} onPress={this.showDetail.bind(this)}>

					<View style={styles.blog}>
						
							<View style={styles.name}>
								<Text style={styles.nameText}>{this.props.name}</Text>
							</View>
							<View style={styles.author}>
								<Text style={styles.authorText}>{this.props.author}</Text>
							</View>
						
					</View>
				</TouchableOpacity>
	}
	
	showDetail () {
		
		const { navigator, name, url } = this.props

	    if(navigator) {

	        navigator.push({
	        	...NEXT_PAGE,
	        	props: {

	        		name,
	        		url
	        	}
	        })
	    }
	}

}