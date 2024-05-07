
import './App.css';
import Home from './routes/Home';
import About from "./routes/About.jsx"
import Services from "./routes/Services.jsx"
import Contacts from "./routes/Contacts.jsx"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contacts/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
