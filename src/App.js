import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { useEffect } from 'react';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/home/home';

function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/flowbite@1.5.3/dist/flowbite.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    
       <div >
        <Router>
        <Header/>
        <div className="main-body">
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          </Routes>
        </div>
        </Router>

   
     
    </div>
  
   
  );
}

export default App;
