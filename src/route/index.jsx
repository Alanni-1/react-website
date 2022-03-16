import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages'
import SigninPage from '../pages/signin';

const BaseRouter = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<SigninPage/>}></Route>
      </Routes>
    </BrowserRouter>
)


export default BaseRouter
