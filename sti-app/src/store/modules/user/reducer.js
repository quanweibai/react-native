/**
 * reducer根据action的type属性，更新state
 * 
 */
import * as types from '../types'

//初始化状态
const USER = {

	name: '匿名用户',
	organization: '',
	isLogin: false,
	apps:[]
}

/**
 * 永远返回新的state，不对原有state做修改
 * 
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
export default function todoApp(state = USER, action) {

	switch (action.type) {

		case types.TYPE_USER_LOGIN:

			return {

				...action.user
			}
		default: 
			//必须
			return state
	}
}