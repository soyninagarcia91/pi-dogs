import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Character from './components/Character';
import Detail from './components/Detail'
import Card from './components/Card';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path ='/' element={<LandingPage/>}/>
        <Route path ='/home' element={<Home/>}/>
        <Route path ="/character" element={<Character/>}/>
        <Route path="/home/:id" element={<Detail/>}/>
      </Routes>
      <h1>Henry Dogs</h1>
    </div>
  );
  const onClose = (id) => {
    const filtered = characters.filter((character) => character.id !== id);
    setCharacters(filtered)

}
}

export default App;
