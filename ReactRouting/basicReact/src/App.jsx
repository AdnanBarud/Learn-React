import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar';

 const router=createBrowserRouter(
  [
    {
      path:'/',
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path:'/about',
      element: 
      <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path:'/contact',
      element: 
      <div>
        <Navbar />
        <Contact />
      </div>
    }
  ]
 )

function App(){

  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  )
}

export default App
