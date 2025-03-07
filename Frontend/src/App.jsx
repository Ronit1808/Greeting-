import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {


  const [name, setName] = useState('')
  const [greeting, setGreeting] = useState('')


  const handleGreet = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/greet?name=${name}`)
      const data = await res.json()
      setName('')
      if(data.error){
        setGreeting(data.error)
      }else {
        setGreeting(data.message)
      }
    } catch (err) {
      setGreeting('Error connecting to the server.');
    }
  }

  return (
    <div className='App'>
      <h1>Greet Yourself</h1>
      <input type='text'
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleGreet}>
        Get Greeting
      </button>
      <p>{greeting}</p>

    </div>
  )
}

export default App