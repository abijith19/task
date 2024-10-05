
import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Task from "./components/Task";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={[<Task/>]}/>
      
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
