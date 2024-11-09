import react,{useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
const Login =()=>{
  const navigate =useNavigate()
  const [name, setName]= useState('')
  const [email,setEmail]= useState('')
  const [password ,setPassword]= useState('')
  const handleLogin=()=>{
    axios.post('http://localhost:5000/login',{name,email,password})
    .then(response=>{
      alert(response.data.message)
      navigate("/")
    })
    .catch(err=>{
      alert(error.response.data.error)
    })
  }

return(
  <div>
    <h1>Login</h1>
    <input 
    type="text"
    placeholder="Name"
    value={name}
    onChange={e=> setName(e.target.value)}/>
    <br/>
    <input 
    type="email"
    placeholder="Email"
    value={email}
    onChange={e=>setEmail(e.target.value)}/>
    <br/>
    <input 
    type="password"
    placeholder="Password"
    value={password}
    onChange={e=> setPassword(e.target.value)}/> 
    <br/>
    <button onClick={handleLogin}> login</button>
    <Link to ="/signup">
      <p>haven't an accout? signup</p>
    </Link>
  </div>)
}
export default Login