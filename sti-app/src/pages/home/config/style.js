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

  	flex: 1,
  	backgroundColor: '#fff'
  },

  app: {

  	...common.containerVert
  },

  backButton: {

    ...common.headerButton
  },

  back: {

    ...common.headerButtonText
  },
})