import Home from './pages/Home';
import {BrowserRouter , Switch , Route} from "react-router-dom"
import NotFound from './pages/NotFound';
import About from './pages/About';
import Country from './components/Country';
function App() {
  return (
    <div >
       <BrowserRouter>
          <Switch >
                 <Route path="/" exact component={Home} />
                 <Route path="/about" exact component={About}/>
                 <Route pathe="/countries/:name" children={<Country/>}/>
                 
          </Switch>
       </BrowserRouter>
     </div>
  );
}

export default App;
