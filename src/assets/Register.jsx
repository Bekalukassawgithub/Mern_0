import react,{useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
const Register=()=>{
  const navigate= useNavigate()
  const {name,setName}=useState('')
  const {email,setEmail}=useState('')
  const {password,setPassword}=useState('')
  const handleSignup=()=>{
    axios.post('http://localhost:5000/signup',{name,email,password})
    .then(response=>{
    alert( response.data.message)
    navigate('/login')
    })
    .catch(error=>{
      alert(error.response.data.error)
    })
  }
  
  

return(
  <div>
    <h1>Sign up</h1>
    <input 
    type="name"
    placeholder="Name"
    value={name}
    onChange={e=> setName(e.targate.value)}/>
    <br/>
     <input
     type="password"
    placeholder="Password"
    value={password}
    onChange={e=> setPassword(e.target.value)}
     />
     <br />
     <input
     type="email"
    placeholder="Email"
    value={email}
    onChange={e=> setEmail(e.target.value)}
     /> 
     <br/>
     <button onClick={handleSignup}>Signup</button>
     <Link to="/login">
       <p>have an accout ? login</p>
     </Link>
  </div>
  )
}
  export default Register