import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import OrderForm from './components/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/order" component={OrderForm} />
      <Route path="/confirmation" component={OrderConfirmation} />
    </Switch>
  )
}

export default App
