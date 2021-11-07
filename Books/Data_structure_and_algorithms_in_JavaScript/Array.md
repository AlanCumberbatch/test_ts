# Array: 一个存储元素的线性集合。

* 定义： 数组中的元素可以通过索引来任意存取，索引通常是数字，用来计算元素之间的存储位置的偏移量。
* 使用
  * 创建：
    * ``` var arr = [];```
    * ``` var arr = new Array([length/items you want to put in an array]);```
  * 读写
    * ```arr[index]//常用for循环```
  * 由字符串生成数组**split**
    * ```var arr = "the quick brown fox jumped over the lazy dog".split(" ")```
  * 对数组的整体性操作
    * 将一个数组赋值给另外一个数组
* 存取函数
  * 查找元素：
    * indexOf  <----> lastIndexOf
  * 数组的字符串表示 // 两个方法都返回一个包含数组所有元素的字符串，各元素之间用逗号分隔开
    * join()
    * toString()
  * 由已有数组创建新数组
    * concat(): 方法的**发起者是一个数组**，参数是另一个数 组。作为参数的数组，其中的所有元素都被连接到调用 concat() 方法的数组后面。
    * splice(): 从现有数组里截取一个新数组。
* 可变函数
  * push(),unshift()
  * pop(),shift()
  * splice(startIndex,toDeleteNum,addItemFromStartIndex)
  * 排序：
    * reverse()
    * sort();//元素是字符串类型： sort 方法假定所有元素都是字符串类型。可传入函数作为比较函数
* 迭代器方法： 这些方法对数组中的每个元素应用一个函数，可以返回一个 值、一组值或者一个新数组。
  * 不生成新数组的迭代器方法：
    * forEach()
    * every() //接受一个函数，返回值为Boolean
    * some() //接受一个函数，返回值为Boolean
    * reduce() //接受一个函数，返回一个值 ----》 数字：值的累加； 字符串：全部拼接起来（字符串的相加）
  * 生成新数组的迭代器方法
    * map()
    * filter() // 类比every()
* 二维和多维数组
  * Array.matrix// a polyfill
  * var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
* 处理二维数组的元素
  * 按列访问
  * 按行访问
<!-- 以上是基本类型数组，数字，或者字符串 -->
* 对象数组
* 对象中的数组






