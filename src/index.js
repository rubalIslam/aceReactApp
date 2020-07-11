import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { firebase } from './firebase';

//import App from './App';
import Routes from './routes';

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes {...props}/>
    </BrowserRouter>
  )
}
//const user = "rubal"
//ReactDOM.render(<App user = {user}/>,document.getElementById('root'));
firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(<App user = {user}/>,document.getElementById('root'));
})

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

