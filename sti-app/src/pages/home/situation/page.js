/**
 * home页面
 *
 * created by zhangdi 02/13/2017
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { R2LSwipe } from '../../scence'
import styles from './style'
import Header from '../../../components/header'
import Loading from '../../../components/loading'

export default class Situation extends Component {

  constructor(props) {
    super(props);
  
    this.state = {

      loadingEnd: false
    };
  }

  render() {

    return (

      <View style={styles.container}>
        <Header title='Bye' route={this.props.route}>
        	<TouchableOpacity onPress={this.goBack.bind(this)} style={styles.backButton}>
	        	<Icon name="chevron-left" style={styles.back} />
	        </TouchableOpacity>
        </Header>
        <ScrollView style={styles.content}>
          <View style={styles.app}>
          </View>
        </ScrollView>
      </View>
    )
  }

  static scence() {

  	return R2LSwipe()
  }

  goBack() {

    const {navigator} = this.props

    if(navigator) {

      navigator.pop()
    }
  }

}

