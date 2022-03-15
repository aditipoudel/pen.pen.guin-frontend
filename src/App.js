
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import './Home.css'
import Footer from './Footer/Footer';


import Mid from './Middlewear/Mid';

import 'react-bootstrap/dist/react-bootstrap'
//:   node_modules/react-bootstrap/dist/react-bootstrap.min.js
//node_modules/react-bootstrap/dist/react-bootstrap.js
function App() {
  return (
    <BrowserRouter>
    <div className="App">
  
   <Mid/>
   <Footer/>
  </div>
  </BrowserRouter>

  );
}

export default App;
