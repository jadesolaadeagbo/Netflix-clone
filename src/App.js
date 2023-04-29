import {  Route, Routes  } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Home from './pages/Home.jsx'
import {AuthContextProvider} from './context/AuthContext'
import Login from "./pages/Login.jsx"
import Signup from './pages/Signup.jsx'
import Account from './pages/Account.jsx'
import ProtectedRoute from './components/ProtectedRoute.js'

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/account' element={<ProtectedRoute>
              <Account/>
            </ProtectedRoute> } />

        </Routes>        
      </AuthContextProvider>

    </div> 
  )
}

export default App
