import Posts from './Posts';
import useFetch from './useFetch';

const Home = () => {
  const {data:posts,isPending,error} = useFetch('http://localhost:8080/posts')
  return (
    <div className="home">
      <h2>Home Page</h2>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {posts && <Posts posts = {posts} title="Posts" />}
    </div>
  );
}

export default Home;
