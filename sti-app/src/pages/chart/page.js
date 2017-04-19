/**
 * 统计页面
 *
 * created by zhangdi 02/13/2017
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  WebView
} from 'react-native';

import styles from './style'
import Header from '../../components/header'
import Tab from '../../components/tab'
import Loading from '../../components/loading'
import ChartView from 'react-native-highcharts';

export default class Chart extends Component {
  render() {
    var Highcharts = 'Highcharts';
    var conf = {
      chart: {
          type: 'spline',
          animation: Highcharts.svg,
          marginRight: 10,
          events: {
              load: function () {

         
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), 
                          y = Math.random();
                      series.addPoint([x, y], true, true);
                  }, 1000);
              }
          }
      },
      title: {
          text: 'Live random data'
      },
      xAxis: {
          type: 'datetime',
          tickPixelInterval: 150
      },
      yAxis: {
          title: {
              text: 'Value'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
          formatter: function () {
              return '<b>' + this.series.name + '</b><br/>' +
                  Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                  Highcharts.numberFormat(this.y, 2);
          }
      },
      legend: {
          enabled: false
      },
      exporting: {
          enabled: false
      },
      series: [{
          name: 'Random data',
          data: (function () {
              var data = [],
                  time = (new Date()).getTime(),
                  i;

              for (i = -19; i <= 0; i += 1) {
                  data.push({
                      x: time + i * 1000,
                      y: Math.random()
                  });
              }
              return data;
          }())
      }]
    };

    let user = this.props.user;
    if(!user.isLogin) {
      return (
        <View style={styles.container}>
          <Header title='统计分析' route={this.props.route}/>
          <WebView
              style={styles.container}
              source={{ uri: 'https://www.baidu.com' }}
              javaScriptEnabled={true}
              scalesPageToFit={true}
              domStorageEnabled={true}
          />
          <Tab navigator={this.props.navigator} route={this.props.route}/>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Header title='统计分析' route={this.props.route}/>
          <View style={styles.content}>
            <Text>您尚未登录，请到个人中心登录~</Text>
          </View>
          <Tab navigator={this.props.navigator} route={this.props.route}/>
        </View>
      )
    }
  }

}

