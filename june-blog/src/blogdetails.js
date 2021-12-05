import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="blog-details">
            { error && <div> { error } </div> }
            {isPending && <div>Loading...</div>}
            {blogs && (
                <article>
                    <h2>{ blogs.title } </h2>
                    <p>Written by {blogs.author}</p>
                    <div className="blog-body">{blogs.body}</div>
                </article>
                )}
        </div>
     );

}
 
export default BlogDetails;