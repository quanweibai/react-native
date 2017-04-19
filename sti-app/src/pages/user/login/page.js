/**
 * 用户页面
 *
 * created by zhangdi 02/13/2017
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { B2T } from '../../scence'
import styles from './style'
import Header from '../../../components/header'
import Tab from '../../../components/tab'
import Home from '../../../pages/home'

import pinch from 'react-native-pinch'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  handleUserName(event) {
    this.setState({
      username: event
    })
  }

  handlePassword(event) {
    this.setState({
      password: event
    })
  }

  handleError(value) {
    let self = this;
    this.setState({
      error: ''
    });
    this.setState({
      error: value
    });
    setTimeout(function() {
      self.setState({
        error: ''
      });
    }, 2000);
  }

   goBack() {

    const {navigator} = this.props

    if(navigator) {

      navigator.pop()
    }
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

  submit() {
    if(this.state.username && this.state.password) {
      let username = this.state.username;
      let password = this.state.password;
      this.props.login(username, password, this.props.navigator);
    }
  }

  render() {

    return (

      <View style={styles.container}>
        <Header title='用户登录' 
          route={this.props.route} 
          background='#fff' 
          color='#000'
          border={{width: 1, color: '#ccc'}}
          >
          <TouchableOpacity onPress={this.goBack.bind(this)} style={styles.backButton}>
             <Icon name="chevron-left" style={styles.back} />
          </TouchableOpacity>
        </Header>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.avatar}></View>
            <Text style={styles.avatarText}>您还未登录，赶紧登录吧~</Text>
          </View>
          <Text style={styles.error} ref='error'>{this.state.error}</Text>
          <TextInput onChangeText={this.handleUserName.bind(this)}  style={styles.username} autoFocus={false} placeholder='用户名' ref='username' name="username" placeholderTextColor='#ccc' clearButtonMode='while-editing'/>
          <TextInput onChangeText={this.handlePassword.bind(this)}  style={styles.password} placeholder='密码' ref='password' name="password" placeholderTextColor='#ccc' secureTextEntry={true}/>
          <TouchableOpacity onPress={this.submit.bind(this)} style={styles.submit}>
             <Text style={styles.submitText}>登录</Text>
          </TouchableOpacity> 
        </View>
      </View>
    )
  }
}

