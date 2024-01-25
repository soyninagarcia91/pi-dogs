import './App.css';
import{BrowserRouter,Route,Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Character from './components/Character';
import Detail from './components/Detail'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path ='/'component={LandingPage}/>
<Route path ='/home' component={Home}/>
<Route path ="/character" component= {Character}/>
<Route path="/home/:id" component={Detail}/>
      </Switch>
      {/* <h1>Henry Dogs</h1> */}
    </div>
    </BrowserRouter>
  );
}

export default App;