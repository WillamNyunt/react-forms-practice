import { useState } from "react";
import { Input } from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  })

  const [didEdit, setDidEdit ] = useState({
    emailEdit: false,
    passwordEdit: false,
  })

  function handleSubmit(e){
    e.preventDefault()
    console.log('submitted')
  }

  function handleUserInput(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }))
    setDidEdit(prevDidEdit => ({
      ...prevDidEdit,
      [identifier] : false
    }))
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevDidEdit => ({
      ...prevDidEdit,
      [identifier] : true
    }))
  }

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
     
      <div className="control-row">
        <Input onBlur={() => handleInputBlur('email')} id="email" type="email" name="email" onChange={(event) => handleUserInput('email', event.target.value)} value={enteredValues.email} error={emailIsInvalid && 'Please enter a valid email'} />
        <Input  onBlur={() => handleInputBlur('password')} id="password" type="password" name="password" onChange={(event) => handleUserInput('password', event.target.value)} value={enteredValues.password}/> 
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
