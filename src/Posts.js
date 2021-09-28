import {Link} from 'react-router-dom';

const Posts= ({posts,title}) =>{
  return(
    <div>
      <h3 style={{
        textAlign: 'left',
        marginLeft: '0.62em'
      }}>{title}</h3>
      <div className="blog flx">
        {posts.map((post) =>(
          <div className="post-preview" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h4>{post.title}</h4>
              <p>Category: <span className="postcat">{post.cat}</span></p>
              </Link>
              </div>
        ))}
      </div>
    </div>
  )
}

export default Posts;
