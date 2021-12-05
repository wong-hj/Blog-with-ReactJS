import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

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

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <div>{ error } </div> }
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}

        </div>
     );
}
export default Home
