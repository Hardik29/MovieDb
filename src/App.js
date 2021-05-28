import './App.css';
import {Route,Redirect } from "react-router-dom"
import Movie from './Components/movie';
import Customer from './Components/Customer';
import Rentals from './Components/Rentals';
import NotFound from './Components/NotFound';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Route path="/customer" component={Customer}></Route>
     <Route path="/rentals" component={Rentals}></Route>
     <Route path="/movies" component={Movie}></Route>
     <Route path="/not-found" component={NotFound}></Route>
     <Route from="/" to="/movies" />
     <Redirect to="/not-found" />
    </div>
  );
}

export default App;
