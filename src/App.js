import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddTodo from "./Components/AddTodo";



function App() {
  return (
   <div>
    <h1 style={{margin:"10px 50px"}}>Welcome To Todo App</h1>
    <nav id="navbar">
      <Link style={{marginRight:"50px"}} to='/'>Home</Link>
      <Link to='/add-task'>Add Todo</Link>
    </nav>
    <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/add-task" element={<AddTodo />}></Route>
    </Routes>
   </div> 
  );
}

export default App;
