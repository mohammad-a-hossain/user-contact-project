import React from 'react'
import {Provider} from 'react-redux'
import { DataTable } from './components/DataTable'
import  Navber  from './components/Navber'
import store from './redux/store'
import  './style/App.scss' 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from './components/add/AddUser.js'
import EditUser from './components/edit/EditUser'

function App() {
  return (
    <Provider store={store}>
      <Router>
    <div className="App">
     <Navber/>
     <Switch>
       <Route exact path='/' component ={DataTable}/>
       <Route exact path='/components/add' component={AddUser}/>
       <Route exact path='/components/edit/:id' component={EditUser}/>
    </Switch>
    </div>  
    </Router>
    </Provider>
  );
}

export default App;
