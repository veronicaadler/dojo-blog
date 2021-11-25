import BlogList from './BlogList';
import useFetch from "../components/useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>} {/*only runs if the fetch is pending*/}
            {blogs && <BlogList blogs={blogs} />} {/*only runs once the blogs data is retrieved from the json server*/}
        </div>  
    );
}
 
export default Home;