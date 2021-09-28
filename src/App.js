import './App.css';
import Nav from './Navbar';
import Home from './Home';
import Create from './Create';
import PostSingle from './PostSingle';
import NotFound from './NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App(){
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Nav />
        </header>
        <div className="content">
          <main>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/posts/:id">
              <PostSingle/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          </main>
        </div>
        <footer>
          <a
          className="km-link"
          href="https://media.korvin.org"
          rel="noopener noreferrer"
          >Korvin M Media</a>
        </footer>
      </div>
    </Router>
  )
}

export default App;
