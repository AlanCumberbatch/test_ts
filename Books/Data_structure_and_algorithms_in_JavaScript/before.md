# 介绍的js相关的内容

* 声明和初始化变量
* JavaScript 中的算术运算和数学库函数
  * 数学运算： +，-，* /，%
  * 存在一个数学库，计算其他复杂运算
* 判断结构
  * if
  * switch
  * 循环结构
    * for
    * while
* 函数：有返回值的，没有返回值的（有时被叫做子程或void 函数）
* 变量作用域
* 递归<br/>
!!! 任何可以被**递归**定义的函数，都可以被改写成**迭代式**的程序，要将这点牢记于心
```js
function factorial(number){
  if(number == 1){
    return number;
  } else {
    return number * factorial(number - 1);
  }
}
```
* 对象和面向对象编程
 本书使用的都是对象，通过创造构造函数创造对象
