function main() {
	var canvas = document.getElementById('webgl')
	if (!canvas) {
		console.log('没能成功获取canvas')
		return false
	}

	var gl = getWebGLContext(canvas) //为了隐藏不同浏览器间获取 webGL绘图上下文之间入参的差异 canvas.getContext('3d')
	// from  cuon-utils.js
	if (!gl) {
		console.log('没能成功获取gl')
		return false
	}

	gl.clearColor(1.0, 0, 1.0, 0.1) //指定清空颜色

	gl.clear(gl.COLOR_BUFFER_BIT) //执行 清空 canvas盒子----清空绘图区域，实际上清空的是：颜色缓冲区（color buffer，即COLOR_BUFFER_BIT的意义[在 OpenGL中]）

	gl.clearColor(0, 0, 0, 1)
	gl.clear(gl.COLOR_BUFFER_BIT)
}
