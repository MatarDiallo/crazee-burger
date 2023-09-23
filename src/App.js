import React, { useState } from 'react'

 function App() {
const [count, setCount] = useState(1)
const handleClick=()=>{
  
alert('Bonjour ')
}
  return (
    <div>
      <h1>Bienvenue chez nous!</h1>
      <p>Connectez-vous</p>
     <input placeholder='Entrez votre prénom' name='Nom' required></input> <button onClick={handleClick} >Accédez à votre espace</button>

    </div>
  )
}

export default App;
