import { useState, useEffect } from 'react'; 
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([null]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            setIsPending(false);
          });
      }, []);

    return (
        <div className="home">
            { isPending && <div>Loading...</div>} {/*only runs if the fetch is pending*/}
            {blogs && <BlogList blogs={blogs} />} {/*only runs once the blogs data is retrieved from the json server*/}
        </div>  
    );
}
 
export default Home;