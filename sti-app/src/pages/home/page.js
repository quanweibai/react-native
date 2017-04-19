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
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './style'
import Header from '../../components/header'
import Tab from '../../components/tab'
import Loading from '../../components/loading'
import Situation from './situation'
import Safetymonitor from './safetymonitor'
import Alarmnotify from './alarmnotify'
import Config from './config'
import Scan from './scan'

export default class Home extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      loadingEnd: false
    };
  }

  render() {

    // let apps = this.props.apps,
    //     groups1 = this.props.apps.slice(0, 5)
    //     groups2 = this.props.apps.slice(5, 10)

    return (

      <View style={styles.container}>
        <Header title='NGSOC' route={this.props.route}>
           
        </Header>
        {
          !this.state.loadingEnd ?
          <Loading/> :
          <View style={styles.app}>
              <Text>home</Text>
          </View>
        }
        
        <Tab navigator={this.props.navigator} route={this.props.route}/>
      </View>
    )
  }

  componentDidMount() {

    // this.props.getApps().then(() => {

    //   this.setState({loadingEnd: true})
    // })

    this.setState({loadingEnd: true})
  }
}

