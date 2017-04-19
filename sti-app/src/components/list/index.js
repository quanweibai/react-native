/**
 * 列表组件
 * 
 * Created by zhangdi 02/13/2017
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
} from 'react-native'

import styles from './style'
import Item from './item'

export default class ItemList extends Component {

  render() {

    const { contents, navigator } = this.props;

    return	<View style={styles.container}>

	    		<ScrollView style={styles.root}>
					{
						contents.map((data, index) => {

							return <Item navigator={navigator} key={data.id} {...data} />
						})
					}
				</ScrollView>

			</View>
  }
}
