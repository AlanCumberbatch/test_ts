
// import React from 'react';
import TextWithLineBreaks from '@/components/FunctionComponent/TextWithLineBreaks'

const rawText = `节后第一天上班
脑子好累
肩膀也不舒服
整个后背都不自在
眼睛也时不时得睁不开
手腕有点儿刺挠
手指也有点儿酸呢咋！？
坐时间长了屁股还有点儿麻了…

扫了一眼右手边儿的同事：
双眼无神，
精神涣散，
手脚无力，
浑身瘫软，
哈欠连天，

再一扫左手边儿的同事：
双眼泛着青春的光，
身体似乎跃跃欲试，
整个人还哼着小歌，
就好像假期还没有结束！

啊！这个B班，就真的得上吗！`;

const Chapter8 = () => {
  return <TextWithLineBreaks rawText={rawText} />
};

export default Chapter8;
