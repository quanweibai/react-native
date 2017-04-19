/**
 * 通用样式库
 *
 * created by zhangdi 02/13/2017
 */
export default {

	//水平flex布局默认样式
	containerHori: {
		
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
        alignItems: 'center'
	},

	//垂直flex布局默认样式
	containerVert: {	

		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},

	//头部两端按钮布局
	headerPort: {

		width: 50,
	    height: 50,
	    paddingHorizontal: 10,
	    flexDirection: 'row',
	    justifyContent: 'center'
	},

	//头部按钮样式
	headerButton: {

		flex: 1,
	    flexDirection: 'row',
	    justifyContent: 'center',
	    alignItems: 'center'
	},

	headerButtonText: {

		color: '#fff',
		fontSize: 20
	}	

}