import React, {useState} from 'react'

const App = () => {

  const [num, setNum] = useState(10)
  const [ username, setUsername]= useState('Zainab')
  
  function changeNum () {
    setNum (30)
    setUsername('Aqsa')
  }

  return (
    <div className="app-container">
      <h1 className="heading">
        Value of num is <span className="value highlight">{num}</span>
        <br />
        Value of user is <span className="value highlight">{username}</span>
      </h1>
      <button className="btn" onClick={changeNum}> Click </button>
    </div>
  )
}

export default App

/*import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num + 1)
  }

  function decreaseNum() {
    setNum(num - 1)
  }

  return (
    <div className="app-container">
      <h1 className="counter-num">{num}</h1>
      <div className="btn-group">
        <button className="btn" onClick={increaseNum}>Increase</button>
        <button className="btn" onClick={decreaseNum}>Decrease</button>
      </div>
    </div>
  )
}

export default App*/

