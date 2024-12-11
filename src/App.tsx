import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import NoPage from './Components/NoPage'
import Homepage from './Components/Hompage'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '*',
      element: <NoPage/>
    }
  ]) 
  return (
    <>
      <RouterProvider router={router}/>
    </> 
  )
}

export default App