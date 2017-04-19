/**
 * 将reducer按模块拆分
 * 分别管理自己的state
 *
 * created by zhangdi 02/13/2017
 */
import { combineReducers } from 'redux'
import user from './modules/user/reducer'
// import home from './modules/home/reducer'

/**
 * combineReducers函数
 * 等价于 function reducerApp(state = {}, action) {
 *
 *		return {
 *			home: home(state.home, action)
 *		}
 * 
 * }
 * @type {[type]}
 */
let reducerApp = combineReducers({
	user
})

export default reducerApp
