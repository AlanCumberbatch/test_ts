
// import React from 'react';
import TextWithLineBreaks from '@/components/FunctionComponent/TextWithLineBreaks'

const rawText = `穿裤子的困扰
第一想法：不错诶！应该能帮助人更多的阅读。

第二想法：那么多app可以，是不是有些落伍了啊

第三想法：觉得不错，哲学相关的，或者Computer Graphics相关的`;

const Chapter10 = () => {
  return <TextWithLineBreaks rawText={rawText} />
};

export default Chapter10;
