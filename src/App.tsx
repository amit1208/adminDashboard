import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {lazy} from 'react';
const Dashboard = lazy(()=> import ('./pages/Dashboard'));
const Products = lazy(()=> import ('./pages/Products'));
const Transaction = lazy(()=> import ('./pages/Transaction'));
const Customers = lazy(()=> import ('./pages/Customers'));


const App = () => {
  return (
    <Router>
       <Routes>
        <Route path ="/admin/dashboard" element={ <Dashboard/> } />
        <Route path ="/admin/products" element={ <Products/> } />
        <Route path ="/admin/transaction" element={ <Transaction/> } />
        <Route path ="/admin/customers" element={ <Customers/> } />

      </Routes>
    </Router>
      
  )
  
}

export default App

