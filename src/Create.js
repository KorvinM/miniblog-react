import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create= () => {

  /* create some state to track for the form */
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [cat, setCat] = useState('status')
  const [isPending, setIsPending]= useState(false)
  const history=useHistory()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const post={title, body,cat}
    console.log(post)
    setIsPending(true)
    fetch('http://localhost:8080/posts',{
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(post)
    }).then(() =>{
      setIsPending(false)
      history.push('/')
    })
  }

  return(
    <div className="create">
      <h2>Add post</h2>
      <form className="grd" onSubmit={handleSubmit}>
        <div>
        <label>Post title</label>
        <input
          type="text" required
          value={title}
          /*update state to input value*/
          onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
        <label>Post content</label>
        <textarea
          className="body"
          required
          value={body}
          /*update state to input value*/
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        </div>
        <div className="form-controls">
          <div>
          <label>Category</label>
          <select
            value={cat}
            /*update state to input value*/
            onChange={(e) => setCat(e.target.value)}>
            <option value="status">Status</option>
            <option value="essay">Essay</option>
            </select>
            </div>
            {!isPending && <button>Post it!</button>}
            {isPending && <button disabled>Pending...</button>}
          </div>
      </form>
    </div>
  )
}

export default Create;
