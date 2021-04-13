import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useState} from 'react';
import CartScreen from './screens/Cart/CartScreen';
import HomeScreen from './screens/Home/HomeScreen';
import ProductScreen from './screens/Product/ProductScreen';
import Navbar from './components/Nav/Navbar';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import './App.css';

function App() {

  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <Navbar />
      <SideDrawer show={sideToggle} />
      <Backdrop show={sideToggle} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
