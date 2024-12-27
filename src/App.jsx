import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MasterLayout   from "./components/MasterLayout/MasterLayout";
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Experience from "./components/Experience/Experience"
import Work from "./components/Work/Work"
function App() {
  const routes = createBrowserRouter([{
    path:"/",
    element:<MasterLayout/>,
    children:[
      {index:true , element:<Home/>},
      {path:"/home" ,element:<Home/>},
      {path:"/about" ,element:<About/>},
      {path:"/skills" ,element:<Skills/>},
      {path:"/experience" ,element:<Experience/>},
      {path:"/work" ,element:<Work/>}
     
    ]
  }])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
