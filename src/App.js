import React from "react";
import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
   <Router>
    {/* Header */}
    <Header/>
    <div className="app_body">
       {/* Side bar */}
      <Sidebar/>
      <Switch>
        <Route path="/room/:rommId">
          <h1>Chat Screen </h1>
          {/* <Chat/> */}
        </Route>
        <Route path="/">
          <h1>Welcome</h1>
        </Route>
      </Switch>
    </div>
   

    {/* react router chat screen */}
    </Router>
    </div>
  );
}

export default App;
