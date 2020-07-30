import React from 'react';
import './App.css';
import ProjectList from './Components/projects/ProjectList';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectDetails from './Components/projects/ProjectDetails';
import AddProject from './Components/projects/AddProject';



function App() {
  return (
    <div className="App">

      <NavBar />
      <Switch>
        <Route exact path='/'>
          <AddProject/>
        </Route>
        <Route exact path='/projects'>
          <ProjectList />
        </Route>
        <Route path='/projects/:id' render={(props) => <ProjectDetails {...props}/>} /> {/* Enviar props a ProjectDetails */}

      </Switch>

    </div>
  );
}

export default App;
