/**
 * 容器组件
 * 专注于数据变化导致的运行变化
 *
 * created by zhangdi 02/13/2017
 */
import { connect } from 'react-redux'
// import { app } from '../../store/modules/home/actions'
import Home from './page'

/**
 * state到props的映射
 * @param  {[type]} state    store状态
 * @param  {[type]} ownProps 绑定到container上的参数
 * @return {[type]}          传入Home组件的props
 */
const mapStateToProps = (state, ownProps) => {

  return {

    // apps: state.home,
    user: state.user
  }
}

/**
 * dispatch到props的映射
 * @param  {[type]} dispatch dispatch方法
 * @param  {[type]} ownProps 绑定到container上的参数
 * @return {[type]}          传入Home组件的props
 */
// const mapDispatchToProps = (dispatch, ownProps) => {

//   return {

//   	getApps: (uid) => {

//   		return dispatch(app(uid))
//   	}

//   }
// }

/**
 * 与组件建立连接
 * @type {[type]}
 */
export default connect(
	
	mapStateToProps,
	// mapDispatchToProps
)(Home)

