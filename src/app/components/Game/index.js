import React from 'react'
import Input from 'app/components/Input'
import RotateBox from 'app/components/RotateBox'

const Game = (props) => {
  return(
    <div key="game" className="padding section">
      <Input/>
      <RotateBox/>
    </div>
  )
}

export default Game