import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
// createContext (for useContext hook)
 const Context = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Context.Provider value={'Lucky'}> <App />
    <Home/></Context.Provider>
   
  </React.StrictMode>
);

export {Context};
