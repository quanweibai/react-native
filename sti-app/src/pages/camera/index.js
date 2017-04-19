/**
 * 容器组件
 * 专注于数据变化导致的运行变化
 *
 * created by zhangdi 02/13/2017
 */
import { connect } from 'react-redux'
import Camera from './page'

/**
 * 与组件建立连接
 * @type {[type]}
 */
export default connect()(Camera)