import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  container: {

    flex: 1,
    flexDirection: 'row'
  },

  root: {

  	flex: 1
  },

  item: {

    flex:1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },

  blog: {

    flex: 1,
    flexDirection: 'row'
  },

  name: {

    flex: 3
  },

  nameText: {

    fontSize: 16
  },

  author: {
    flex: 1
  },

  authorText: {

    fontSize: 16,
    textAlign: 'right'
  }

})