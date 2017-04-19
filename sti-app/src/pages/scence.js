/**
 * page公共组件
 * 保留之后进行公共接口扩展
 *
 * created by zhangdi 02/21/2017
 */
import { Navigator } from 'react-native'
import buildStyleInterpolator from 'buildStyleInterpolator'
import Dimensions from 'Dimensions'
import PixelRatio from 'PixelRatio'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const PIXEL_RATIO = PixelRatio.get();

export function B2T() {

	const FromTheFront = {

		opacity: {
			value: 1.0,
			type: 'constant',
		},

		transformTranslate: {
			from: {x: 0, y: SCREEN_HEIGHT, z: 0},
			to: {x: 0, y: 0, z: 0},
			min: 0,
			max: 1,
			type: 'linear',
			extrapolate: true,
			round: PIXEL_RATIO,
		}
	}

	const ToTheBack = {
		  
		opacity: {
			from: 1,
			to: 0,
			min: 0,
			max: 1,
			type: 'linear',
			extrapolate: false,
			round: 100,
		}
	}

	return {

		...Navigator.SceneConfigs.FloatFromBottom,
		gestures: null,
		animationInterpolators: {
			into: buildStyleInterpolator(FromTheFront),
	      	out: buildStyleInterpolator(ToTheBack),
	    },
	}
}

export function R2L() {

	return {

		...Navigator.SceneConfigs.HorizontalSwipeJump, //默认从右向左滑动
		gestures: null
	}
}


export function R2LSwipe() {

	return Navigator.SceneConfigs.HorizontalSwipeJump
}


