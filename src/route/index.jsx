import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages'
import SigninPage from '../pages/signin';

const BaseRouter = () => (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<SigninPage/>}></Route>
      </Routes>
    </HashRouter>
)


export default BaseRouter
