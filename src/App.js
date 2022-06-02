import HomePage from './pages/HomePage';
import Rooms from './pages/Rooms'
import About from './pages/About'
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Details from './pages/Details'
import Feedback from './pages/FeedBack.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} /> 
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/rooms/details/:id" element={<Details />} /> 
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
