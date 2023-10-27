import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateBet from './pages/CreateBet'
import Login from './pages/Login'
import SiginUp from './pages/Sigin'
import Home from './pages/Home'
function App() {
 

  return (
    <>

      <div className='w-screen   flex justify-center items-center'>
          <BrowserRouter>
          <Routes>
            <Route path='/' Component={SiginUp}></Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='/home' Component={Home}></Route>
          </Routes>
          </BrowserRouter>
       </div>
    </>
  )
}

export default App
