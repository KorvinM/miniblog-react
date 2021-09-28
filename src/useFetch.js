import {useState, useEffect} from 'react';

const useFetch = (url) =>{
  const [data,setData] = useState(null)
  const [isPending, setIsPending]= useState(true)
  const [error, setError]= useState(null)
  useEffect(()=>{
    //https://developer.mozilla.org/en-US/docs/Web/API/AbortController
    const abort = new AbortController()
    setTimeout(()=>{//simulate loading time
      //https://developer.mozilla.org/en-US/docs/Web/API/fetch
      fetch(url, {signal:abort.signal})
        .then(res =>{
          console.log(res)
          if (!res.ok){
            throw Error('Data not fetched!')
          }
          return res.json()
        }).then(data=>{
          console.log(data)
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err=>{
          if (err.name === 'AbortError'){
            console.log('fetch aborted')
          } else{
            console.log(err.message)
            setIsPending(false)
            setError(err.message)
          }
        })
    }, 444);
    //abort the fetch
    return ()=> abort.abort()
  },[url])

  return{data, isPending, error}
}

export default useFetch;
