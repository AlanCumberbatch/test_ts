
// import React from 'react';
import TextWithLineBreaks from '@/components/FunctionComponent/TextWithLineBreaks'

const rawText = `今天迟到了
得嘛，扣钱了，上个月迟到了八次，这个月开工资应该会扣不少钱…

但是突然想到一个朋友和我说过，“没到手里钱就不要想它，那还不是自己的钱，自己快活要紧。”

没毛病，

瞬间不纠结了，哈哈哈哈。

可以迟到～`;

const Chapter13 = () => {
  return <TextWithLineBreaks rawText={rawText} />
};

export default Chapter13;
