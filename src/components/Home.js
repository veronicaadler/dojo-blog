import { useState, useEffect } from 'react'; 
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch('http://localhost:8000/blogs')
          .then(res => {
              if(!res.ok) {
                throw Error('could not fetch data for that resource.')
              }
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
          })
          .catch(err => {
              // auto catches network / connection error
              setIsPending(false);
              setError(err.message)
          })
        }, 1000);
      }, []);

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>} {/*only runs if the fetch is pending*/}
            {blogs && <BlogList blogs={blogs} />} {/*only runs once the blogs data is retrieved from the json server*/}
        </div>  
    );
}
 
export default Home;