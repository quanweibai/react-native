/**
 * 扫描页面
 *
 * created by zhangdi 02/13/2017
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Camera from 'react-native-camera'
import Icon from 'react-native-vector-icons/FontAwesome'

import { R2LSwipe } from '../../scence'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
    padding: 10,
    margin: 40
  },
  scan: {
    fontSize: 24,
    color: '#ccc'
  }
});

export default class Scan extends Component {

  render() {

    return (

      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableHighlight style={styles.capture} onPress={this.takePicture.bind(this)}>
            <Icon name="camera" style={styles.scan} />
          </TouchableHighlight>
        </Camera>
      </View>
    )
  }

  static scence() {

    return R2LSwipe()
  }

  takePicture() {

    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

}

