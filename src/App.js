import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './NavBar/Nav';
import MainStore from './Store/MainStore';
import Store1 from './Store1/Store1';
import Store2 from './Store2/Store2';
import Store3 from './Store3/Store3';
import Store4 from './Store4/Store4';
import Store5 from './Store5/Store5';


function App() {
  return (
    <Router>    
   <Nav/>
    <Routes>

    <Route path ="/Main" element={<MainStore/>}/>
    <Route path ="/store1" element={<Store1/>}/>
    <Route path ="/store2" element={<Store2/>}/>
    <Route path ="/store3" element={<Store3/>}/>
    <Route path ="/store4" element={<Store4/>}/>
    <Route path ="/store5" element={<Store5/>}/>

    </Routes>
    
    </Router>

   
  );
}

export default App;
//"homepage": "http://vikas703.github.io/Stores-Recipes",
