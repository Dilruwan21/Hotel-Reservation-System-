import Nav from './Components/Nav'
import Footer from './Components/Footer'

import { BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home'

import Gallery from './pages/Gallery'
import Acc from './pages/Acc'
import Offers from './pages/Offers'
import About from './pages/About'
import Contact from './pages/Contact'
import Book from './Book'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Acc' element={<Acc/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Book' element={<Book/>}/>
      </Routes>
      <Footer/>
    
      </BrowserRouter>
    </div>
  );
}

export default App;