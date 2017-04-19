/**
 * 样式文件
 * 天生支持flex布局
 *
 * created by zhangdi 02/13/2017
 */
import { StyleSheet } from 'react-native'

import common from '../../style/common'

export default StyleSheet.create({

  //首页容器
  container: {
	
	...common.containerVert
  },

  //内容区域(scrollView)
  content: {

  	flex: 1,
  	backgroundColor: '#f5f5f5'
  },

  app: {

    ...common.containerVert,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scanButton: {

    ...common.headerButton,
  },

  scan: {

    ...common.headerButtonText,
    color: '#fff'
  },

  //轮播
  pg1: {

    right: 15,
    left: null,
    bottom: 10
  },

  //插播
  pg2: {

    bottom: 10
  },

  //轮播-内容1
  slide1: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },

  //轮播-内容2
  slide2: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },

  //轮播-内容3
  slide3: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },

  //模块入口区域
  entries: {

  	...common.containerVert,
    backgroundColor: '#fff'
  },

  group: {

    ...common.containerHori,
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff'
  },

  //模块单元
  item: {

    width: 60,
  	height: 70,
    flexDirection: 'column',
    alignItems: 'center'
  },

  //模块图标
  entry: {

    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 5,
    backgroundColor: '#ccc'
  },

  //模块名称
  entryText: {

    fontSize: 12
  },

  //板块
  plates: {

    height: 200,
    backgroundColor: '#fff',
    marginTop: 5,
  },

  platesNom:  {

    height: 200,
    backgroundColor: '#fff',
  },

  text: {

    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }

})