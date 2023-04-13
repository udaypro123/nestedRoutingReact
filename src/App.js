import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Navbar from './componets/Navbar'
import Home from './componets/Home';
import Products from './componets/Products';
import Contact from './componets/Contact'
import Login from './componets/Login';
import { useContext } from 'react';
import { authcontext } from './componets/context';
import Electronices from './componets/productcomponents/Electronices';
import Jewellery from './componets/productcomponents/Jewellery';
import Mensclothing from './componets/productcomponents/Mensclothing';
import Womenscltothing from './componets/productcomponents/Womenscltothing';
import Protect from './componets/Protect';

function App() {

  const { islogin } = useContext(authcontext)
  return (
    <>
      <div className='container'>
        {
          islogin ? <>
          <Navbar /> 
          <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/products' element={<Protect><Products /> </Protect> }>
            <Route path='' element={<Navigate to="electronices"/>}/>
          
            <Route path='electronices' element={<Electronices/>}/>
            <Route path='jewellery' element={<Jewellery/>}/>
            <Route path='mensclothing' element={<Mensclothing/>}/>
            <Route path='womensclothing' element={<Womenscltothing/>}/>
          </Route>
          <Route path='/contact' element={<Protect> <Contact /></Protect> }></Route>
        </Routes>
          </> : <Login />
        }

       
      </div>
    </>
  );
}

export default App;
