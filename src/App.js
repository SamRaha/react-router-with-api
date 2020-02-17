import React from 'react';
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import ItemDetail from "./ItemDetail";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      {/* switch makes sure that as soon as router reaches that path, it stops there. exact is needed because / is also there in /about. so it only renders / home. */}
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" exact component={Shop}/>
      <Route path="/shop/:id" component={ItemDetail}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;