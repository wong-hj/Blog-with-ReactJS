
import Navbar from './navbar';
import Home from './home';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "http://www.google.com";
  // const person = { name: "Yoshi", age: 30};

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
