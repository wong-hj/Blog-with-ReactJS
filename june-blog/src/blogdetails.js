import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {useHistory} from 'react-router-dom';


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick= () => {
        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { error && <div> { error } </div> }
            {isPending && <div>Loading...</div>}
            {blogs && (
                <article>
                    <h2>{ blogs.title } </h2>
                    <p>Written by {blogs.author}</p>
                    <div className="blog-body">{blogs.body}</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
                )}
        </div>
     );
}
 
export default BlogDetails;