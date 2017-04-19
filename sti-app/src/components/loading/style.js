/**
 * 加载样式文件
 *
 * created by zhangdi 02/13/2017
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  bg: {
    
    width: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f7f7f7',
    borderRadius: 8,
    backgroundColor: '#f7f7f7',
    overflow: 'hidden',
    
  },

  text: {

    textAlign: 'center',
    lineHeight: 40,
    color: '#000',
    fontSize: 20
  }
})