import { useState, useEffect } from 'react';
import BlogList from './BlogList';

// const Home = () => {

//     const [name, setName] = useState('June');
//     const [age, setAge] = useState(25);

//     const handleClick = () => {
//         setName('June2');
//         setAge(55);
//     } 

//     return ( 
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{name} is {age} years old</p>
//             <button onClick = {handleClick}>Click Yes</button>
            
//         </div>
//      );
// }

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);




    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res);
                if(res.ok) {

                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}

        </div>
     );
}
export default Home
