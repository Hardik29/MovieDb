import {Route,Redirect, Switch } from "react-router-dom"
import Movie from './Components/movie';
import Customer from './Components/Customer';
import Rentals from './Components/Rentals';
import NotFound from './Components/NotFound';
import NavBar from './Components/NavBar';
import MoviesDetilas from './MoviesDetilas';
import LoginForm from "./Components/LoginForm";
import './App.css';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Switch>
     <Route path="/movies/:id" component={MoviesDetilas} ></Route>
     <Route path="/login" component={LoginForm} ></Route>
     <Route path="/customer" component={Customer}></Route>
     <Route path="/rentals" component={Rentals}></Route>
     <Route path="/movies" component={Movie}></Route>
     <Route path="/not-found" component={NotFound}></Route>
     <Redirect from="/" to="/movies" /> 
     <Redirect to="/not-found" />
     </Switch>
    </div>
  );
}

export default App;
