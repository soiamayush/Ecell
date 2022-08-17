import Carousel from './components/Carousel';
import Aboutus from './components/Aboutus';
import Counter from './components/Counter.js';
import Contactform from './components/Contactform';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  return (
<Router>
  <Navbar/>
  <Carousel /> 
  <div className="container my-4 h-40 p1">
    <Aboutus />
    </div>
    <Counter />
    <Contactform />

</Router>
  );
}

export default App;
