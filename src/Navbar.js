import logo from './generated.svg';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar flx">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React Blog</h1>
      <ul className="flx">
        <li><Link to= "/">Home</Link></li>
        <li></li>
        <li><Link to="/create">Create</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
