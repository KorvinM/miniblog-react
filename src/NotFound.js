import {Link} from "react-router-dom";

const NotFound = ()=>{
  return(
    <div className="not-found">
      <h2>Sorry Not Sorry</h2>
      <p>That resource cannot be found</p>
      <Link to="/">Go Home...</Link>
    </div>  
  )
}

export default NotFound;
