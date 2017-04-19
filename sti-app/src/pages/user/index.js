/**
 * 容器组件
 * 专注于数据变化导致的运行变化
 *
 * created by zhangdi 02/13/2017
 */
import { connect } from 'react-redux'
import { login } from '../../store/modules/user/actions'
import User from './page'

/**
 * state到props的映射
 * @param  {[type]} state    store状态
 * @param  {[type]} ownProps 绑定到container上的参数
 * @return {[type]}          传入Home组件的props
 */
const mapStateToProps = (state, ownProps) => {

  return {

    user: state.user
  }
}

/**
 * 与组件建立连接
 * @type {[type]}
 */
export default connect(

  mapStateToProps
)(User)

