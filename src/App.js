

import OrderPage from './components/pages/order/OrderPage';
import LoginPage from './components/pages/login/LoginPage'
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/pages/error/ErrorPage';
 function App() {

  return (<Routes>ErrorPage
    <Route path='/' element={<LoginPage></LoginPage>}></Route>
    <Route path='/order' element={<OrderPage></OrderPage>}></Route>
    <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
     </Routes>)
}

export default App;
