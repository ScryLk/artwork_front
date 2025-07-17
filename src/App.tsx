import Login from './screens/auth/login/login'
import './App.css'
import { Button } from './components/ui/button'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
