import {useHistory, useParams} from 'react-router-dom';
import useFetch from './useFetch.js';

const PostSingle=  () =>{
  const {id} = useParams()
  const {data:post, error, isPending}= useFetch('http://localhost:8080/posts/'+id)
  const history = useHistory()
  const handleClick = () =>{
    /*ask json-server to delete the post specified by id*/
    fetch('http://localhost:8080/posts/'+post.id, {
      method: 'DELETE'
    }).then(()=>{
      history.push('/')
    })
  }
  return(
    <div className = "post-single">
    {isPending && <div className="loading">Loading...</div>}
    {error && <div className="error">{error}</div>}
    {post && (
      <article>
        <h2><span className="posttitle">{post.title}</span></h2>
        <div className="postmeta flx">
          <span className="postcat">Categorised: {post.cat}</span>
          <span className="postid">Post ID: {id}</span>
          <button className="delete" onClick ={handleClick}>delete</button></div>
          <hr/>
        <div className="postbody">{post.body}</div>
      </article>
      )}
    </div>
  )
}

export default PostSingle;
