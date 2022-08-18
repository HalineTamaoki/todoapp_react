import './App.css';
import React from "react";
import Route from './routes';
import TodoProvider from './provider';

//Create the main view for all pages
function App() {
  return (  
    <TodoProvider> 
      <div className='app-style'>
        <Route />
      </div>
    </TodoProvider>
  )
}

export default App;
