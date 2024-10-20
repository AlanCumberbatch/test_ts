// import React from 'react'
import TextWithLineBreaks from '@/components/FunctionComponent/TextWithLineBreaks'

// type Props = {}

// const Chapter = (props: Props) => {

const rawText = `“元神归位”？？？
  什么是元神啊？
  是相的一种.


  既如此，
  我是无，众生相的无
  我是全，全人类的全。

  从人性的角度，
  我既是地狱，你也是。`;


const Chapter = () => {
  return (
    <>
      <TextWithLineBreaks rawText={rawText} />
    </>
  )
}

export default Chapter;