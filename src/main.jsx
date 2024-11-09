import react from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './assets/Login.jsx'
import Register from './assets/Register'
const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/signup",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  }
  
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
