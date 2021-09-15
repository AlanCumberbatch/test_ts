function main() {
	var canvas = document.getElementById('webgl')
	console.log('canvas', canvas)
	if (!canvas) {
		console.log('没能成功获取canvas对象')
		return false
	}

	var ctx = canvas.getContext('2d')

	ctx.fillStyle = 'rgba(0,0,255,1.0)'
	ctx.fillRect(120, 10, 150, 150) //使用填充颜色填充矩阵-----
	//  fillRect(x, y, width, height)
	//为什么一定是矩阵？：是fillRect规定了矩阵？还什么别的？----矩形的英语是 rectangle

	// 清空绘图区  清空即用什么东西将Canvas的区域进行填充，但是是什么东西才可以呢？
}
