/**
 * Redux store
 * 支持本地持久化
 * by zhangdi 02/13/2017
 */
import { AsyncStorage } from 'react-native'
import { applyMiddleware, createStore, compose } from 'redux'
import repromise from 'redux-promise'
import { persistStore, autoRehydrate } from 'redux-persist' //将store对象存储到本地，以及从本地恢复数据到store中
import reducers from './reducers'

var middlewares = compose(applyMiddleware(repromise), autoRehydrate());

export default function configureStore() {

  const store = createStore(reducers, undefined, middlewares);

  //生成存储store的persistor
  persistStore(store, {

    storage: AsyncStorage,
    blacklist: ['user'] //只能屏蔽到一级对象 ‘home.exp’ 不起作用
  });

  if(module.hot) {

    module.hot.accept(() => {

      const nextReducers = require('./reducers').default

      store.replaceReducer(nextReducers)
    })
  }
  
  return store;
}
