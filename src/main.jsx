import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : ()=> fetch('http://localhost:5000/coffees')
      },
      {
        path : '/addCoffee',
        element : <AddCoffee></AddCoffee>
      },
      {
        path : '/updateCoffee/:id',
        element : <UpdateCoffee></UpdateCoffee>,
        loader : ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
