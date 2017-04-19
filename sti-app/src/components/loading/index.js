/**
 * 加载组件
 * 
 * Created by zhangdi 02/13/2017
 */
import React, { Component } from 'react'
import {
  View,
  ActivityIndicator
} from 'react-native'

import styles from './style'

export default class ItemList extends Component {

  render() {

    return	<View style={styles.container}>
				<ActivityIndicator size='large'/>
			</View>
  }
}
