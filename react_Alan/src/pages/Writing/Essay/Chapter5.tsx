
// import React from 'react';
import TextWithLineBreaks from '@/components/FunctionComponent/TextWithLineBreaks'

const rawText = `地铁观察-1
地铁上，每个人都对着自己的手机，表情各色。

手机现在真的是一个不错信息传递平台啊！

他们重的绝大多数都带着蓝牙耳机，是的，我和一样。

透过手机屏幕中的文字，或视频，感受喜怒哀乐，世间百态。亦假亦真，只为沉沦。

我很多时候和他们一样。

那对于手机这样一个信息平台，我，目前主要是吸收者的身份。

为什么不尝试一下只为信息的生产者？`;

const Chapter5 = () => {
  return <TextWithLineBreaks rawText={rawText} />
};

export default Chapter5;
