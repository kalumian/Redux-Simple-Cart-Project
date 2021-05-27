import React from 'react';
import {BrowserRouter as Router ,  Route} from 'react-router-dom'


// Import Components :
import Cart from './Components/Cart';
import Products from './Components/Products';
import Product from './Components/Product';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

// import Store
import store from './store/store'
import {Provider} from  'react-redux'

function App(){
    return (
      <div className="container">
        <Router>
        <NavBar/>
          <Route component={Home} path="/" exact/>
          <Route component={Cart} path="/cart"/>
          <Route component={Products} path="/products" exact/>
          <Route component={Product} path="/products/:id" />
        </Router>
      </div>
    );
}

function AppWithStore(){
  return <Provider store={store}>
      <App/>
  </Provider>
}

export default AppWithStore;
