/**
 * actions用来描述发生了什么，执行了什么动作
 * 
 * 异步操作要定义在action
 */
import * as types from '../types'
import pinch from 'react-native-pinch'

/**
 * 创建异步操作
 * promise中间件，返回promise对象，自动获取resolve的值
 * @return {[type]} [description]
 */
export async function login(username , password, navigator) {
  let user = {
    name: '匿名用户',
    organization: '',
    isLogin: false,
    apps:[]
  };
	// let respone = await pinch.fetch('https://10.187.101.154/ngsoc/admin/login?app=react-native', {
 //        method: 'POST',
 //        headers: {
 //          'Accept': '*/*',
 //          'Content-Type': 'application/json'
 //        },
 //        body: JSON.stringify({"username":  username, "password": password}),
 //        sslPinning: {
 //          cert: 'ngsoc'
 //        }
 //      })
 //      .then(function(res) {
 //        if(res.status == 200) {
 //          let data = JSON.parse(res.bodyString).data;
 //          if(data.apps) {
 //            user = Object.assign({}, {
 //              name: data.username,
 //              organization: '360',
 //              isLogin: true,
 //              apps: data.apps.apps
 //            });
 //            if(navigator) {
 //              navigator.pop()
 //            }
 //          } else if(!data.apps) {
 //            console.log('用户名或密码错误');
 //          } else {
 //            //
 //          }
 //        }
 //      })
 //      .catch(function(err) {
 //         console.log(err);
 //      })

	return {
		type: types.TYPE_USER_LOGIN,
		user: user
	}
}