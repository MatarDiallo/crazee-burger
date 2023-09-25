
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function LoginForm() {
    const [inputValue, setInputValue] = useState("Matar")

    const handleSubmit =(event) => {
        event.preventDefault()

setInputValue("")

    }
    const handleChange = (event) => { 
        setInputValue(event.target.value)
        
     }
  return (
    <div>
        <h1>Bienvenue chez nous!</h1>
    <br></br>
    <h2>Connectez-vous</h2>
    <form action='submit' onSubmit={handleSubmit}>
    <input value={inputValue} type='text' placeholder='Entrez votre nom' required onChange={handleChange}></input>
    <button >Accédez à votre espace</button>
    <Link to="/order">  Vers OrderPage</Link> 
    </form>
    </div>
  )
}
