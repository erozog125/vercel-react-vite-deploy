import { Home } from '../Home/Home';
import './App.css';
import { MyAccount } from '../MyAccount/MyAccount'
import { MyOrder } from '../MyOrder/MyOrder'
import { MyOrders } from '../MyOrders/MyOrders'
import { NotFound } from '../NotFound/NotFound'
import { SignIn } from '../SignIn/SignIn'


function App() {
  
  return (
    <>
      <div className='bg-teal-500'>Hello World Baby!</div>        
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <SignIn />
      <NotFound />
    </>
  )
}

export default App
