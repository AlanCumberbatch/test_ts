// import React from 'react'
import TextWithLineBreaks from '@/components/FunctionComponent/TextWithLineBreaks'

// type Props = {}

// const Chapter = (props: Props) => {

const rawText = `是否上车？
今天下班，地门开，

“我去，这么多人，下一趟吧”

车开起来之后，

“诶，可以先上去之后找一个人少的地儿站着啊！”

可见，先上车还是很重要的。

由此，上车理论成立！`;

const Chapter3 = () => {
  return <TextWithLineBreaks rawText={rawText} />
}

export default Chapter3;