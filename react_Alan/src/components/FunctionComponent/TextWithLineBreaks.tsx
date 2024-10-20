import React from 'react'

const TextWithLineBreaks = ({rawText}) => {

  // 替换文本中的换行符为 <br> 标签
  // const formattedText = rawText.replace(/\n/g, '<br>');
  return (
      <div>
        {/* // <div className="max-h-96 overflow-y-auto"> */}
        {/* 通过 split() 将文本按换行符分割，然后 map() 插入 <br> */}
        {rawText.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {/* {line} */}
            {/* <br /> */}
            {index === 0 ? (
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', borderBottom:'1px solid black'}}>
                {line}
              </h1>
            ) : (
              line.trim() == '' ? <br /> : <div>{line.trim()}</div>
            )}
          </React.Fragment>
        ))}
      </div>
  );
}

export default TextWithLineBreaks;