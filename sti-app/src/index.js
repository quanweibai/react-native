/**
 * NGSOC react-native
 * app入口文件
 * 1.设置默认页面
 * 2.配置导航
 * 3.加载store
 * 
 * created by zhangdi 02/21/2017
 */
import React, { Component } from 'react'
import { AppRegistry , Navigator } from 'react-native'
import { Provider } from 'react-redux'

import Home from './pages/home'//首页
import configureStore from './store'//store
import { R2L } from './pages/scence'

//TODO 扩展Component功能

const store = configureStore() //创建store

const INIT_ROUTE = {

	name: 'home',
	component: Home
} //初始化默认页面

class NGSOC extends Component {

	render() {

		return 	<Provider store={store}>
			
					<Navigator
            
			            initialRoute={INIT_ROUTE}
			            configureScene={this.configureScence}
			            renderScene={this.renderScene}
			          />
				</Provider>
	}

	/**
	 * 导航切换动画设置
	 * @param  {[type]} route      当前视图
	 * @param  {[type]} routeStack 视图堆栈
	 * @return {[type]}            [description]
	 */
	configureScence(route, routeStack) {

		let scence = route.component.WrappedComponent.scence

		return scence ? scence() : R2L()
  	}

  	/**
  	 * 视图render
  	 * @param  {[type]} route     当前视图
  	 * @param  {[type]} navigator Navigator实例
  	 * @return {[type]}           [description]
  	 */
	renderScene(route, navigator) {

		const Comp = route.component

		return  <Comp navigator={navigator} route={route} />
	}

}

AppRegistry.registerComponent('NGSOC', () => NGSOC) //App注册

