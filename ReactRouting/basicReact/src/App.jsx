import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

 const router=createBrowserRouter(
  [
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/about',
      element: <About/>
    },
    {
      path:'/contact',
      element: <Contact />
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
