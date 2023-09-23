import React, { useState } from 'react'
import LoginPage from './components/pages/LoginPage'

 function App() {
const [count, setCount] = useState(1)
const handleClick=()=>{
  
alert('Bonjour ')
}
  return <LoginPage></LoginPage>
}

export default App;
