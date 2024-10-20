// import React from 'react'
import TextWithLineBreaks from '@/components/FunctionComponent/TextWithLineBreaks'

// type Props = {}

// const Chapter = (props: Props) => {

const rawText = `庆幸自己不只买了馒头
今天下班去超市，看到馒头，想吃，买了一份，4个。看到蓝莓，护眼，买了一盒，不大。看到远处的香蕉，养肠胃，买一份。

在走向收银台的这一路上，是不是看到有人打量着我手里拿到东西。看的人多了，我就会想，“怎么了？我买的东西有问题？还是说买馒头就代表我很穷？”想到这里我就会有一种被看低的感觉。

但是我付款时，馒头6块，蓝莓12.48，香蕉23.48。我顿时就觉得我会穷这个是就完全不是的。

但是我走了几步后就惊觉：我本可以不如此啊！

只是因为看着小单价不便宜就可以觉得自己不穷而不自卑？

或者仅因诸多的侧目就开始怀疑自己的穷富？

我真的本不该如此！

我知道我是谁！

我清楚我什么时候处于一个什么位置！

所以不论贫穷富有，我都是我！我都会遵循规律，去做一些事情。

那如此说来，那个女生，你是可以对她表达喜欢的！`;

const Chapter2 = () => {
  return <TextWithLineBreaks rawText={rawText} />
}

export default Chapter2;