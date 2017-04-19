/**
 * 头部样式文件
 *
 * created by zhangdi 02/13/2017
 */
import { StyleSheet } from 'react-native'

import common from '../../style/common'

export default StyleSheet.create({

  container: {

    height: 70,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  page: {

    justifyContent: 'center',
  },

  title: {

    color: '#fff',
    fontSize: 18  
  },

  left: {
    
    ...common.headerPort
  },

  right: {

    ...common.headerPort
  }
})