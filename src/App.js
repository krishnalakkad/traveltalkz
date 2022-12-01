import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import './all.min.css'
import Footer from './Footer';
import { Routes, Route } from "react-router-dom"
import Blog_2 from './Blog_2';
import Service_2 from './Service_2';
import Destination from './Destination';
import Contact from './Contact';


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Blog_2' element={<Blog_2 />} />
          <Route path='/Service_2' element={<Service_2/>}/>
          <Route path='/Destination' element={<Destination/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App; 
