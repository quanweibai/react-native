/**
 * 
 */
import * as types from '../types'

/**
 * 获取注册app
 * @param  {[type]} uid 用户ID
 * @return {[type]}     [description]
 */
export async function app(uid) {

	let apps = await fetch('http://localhost:4000/app/wfront/blog')
			.then(res => {

				return res.data.apps
			})
			.catch(() => [
				{
					id: 'a',
					name: 'a'
				},
				{
					id: 'b',
					name: 'b'
				},
				{
					id: 'c',
					name: 'c'
				},
				{
					id: 'd',
					name: 'd'
				},
				{
					id: 'e',
					name: 'e'
				},
				{
					id: 'f',
					name: 'f'
				},
				{
					id: 'g',
					name: 'g'
				},
				{
					id: 'h',
					name: 'h'
				},
				{
					id: 'i',
					name: 'i'
				},
				{
					id: 'j',
					name: 'j'
				}
			])

	return {

		type: types.TYPE_HOME_APP,
		apps: apps
	}
}