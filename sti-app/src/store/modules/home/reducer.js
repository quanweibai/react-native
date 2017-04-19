/**
 * reducer根据action的type属性，更新state
 * 
 */
import * as types from '../types'

//初始化状态
const APPS = []

/**
 * 永远返回新的state，不对原有state做修改
 * 
 * @param  {[type]} state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
export default function todoApp(state = APPS, action) {

	switch (action.type) {

		case types.TYPE_HOME_APP:

			return [

				...action.apps
			]
				
		default: 
			//必须
			return state
	}
}