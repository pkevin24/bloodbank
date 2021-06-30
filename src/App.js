import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Emergency from './Emergency'
import Navbar from './Navbar';
import './index.css'
import Admin from './Admin'
import Foot from './Foot'
import {Route,Switch} from 'react-router-dom';
import Register from './Register'

function App() {
  return (
    <>
    <div><Navbar/></div>
    <Switch>
      <Route exact path='/' component={Home}>
      <div className="section one">
            
            <div className="container-one">
            
                <Home/>
            </div>
        </div>
      </Route>
      <Route exact path='/emergency' component={Emergency}>
      <section className="section two">
            
            <div className="container-two">
            
                <Emergency/>
            </div>
        </section>
      </Route>
      <Route exact path='/admin' component={Admin}>
      <section className="section three">
            
            <div className="container-three">
            
                <Admin style={{background:"#c95947"}} />
            </div>
        </section>
      </Route>
      <Route exact path='/register' component={Register}>
      <section className="four">
            
            <div className="container-four">
            
                <Register/>
            </div>
        </section>
      </Route>
    </Switch>
    <Foot/>
    </>
  );
}

export default App;
