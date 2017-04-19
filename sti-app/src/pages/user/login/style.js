/**
 * 样式文件
 * 天生支持flex布局
 *
 * created by zhangdi 02/13/2017
 */
import { StyleSheet } from 'react-native'

import common from '../../../style/common'

export default StyleSheet.create({

  container: {
	
	...common.containerVert
  },

  content: {

  	...common.containerVert,
  	justifyContent: 'flex-start',
  	alignItems: 'stretch'
  },

  homeButton: {

    ...common.headerButton
  },

  home: {

    ...common.headerButtonText
  },

  backButton: {

    ...common.headerButton
  },

  back: {

    ...common.headerButtonText,
    color: '#000'
  },

  header: {

    alignItems: 'center'
  },

  avatar: {

  	height: 100,
  	width: 100,
  	marginVertical: 20,
  	backgroundColor: '#ccc',
  	borderRadius: 50
  },

  avatarText: {

  	color: '#a7a7a7',
  	marginVertical: 10,
  },

  username: {

  	height: 40,
  	fontSize: 16,
  	borderColor: '#ccc',
  	borderWidth: StyleSheet.hairlineWidth,
  	marginVertical: 10,
  	paddingHorizontal: 10
  },

  password: {

  	height: 40,
  	fontSize: 16,
  	borderColor: '#ccc',
  	borderWidth: StyleSheet.hairlineWidth,
  	marginVertical: 10,
  	paddingHorizontal: 10
  },

  submit: {

    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#f57a1b'
  },

  submitText: {

    color: '#fff',
    fontWeight: 'bold'
  },

  error: {
    textAlign: 'center',
    color: '#F48024',
    fontSize: 16
  }
})

