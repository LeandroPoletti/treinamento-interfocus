import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "simple-react-routing";
import Layout from "./layout/Layout";
import Home from "./layout/Home";

function App() {
  // const [count, setCount] = useState(0);
  // [get, set]

  return (
    <BrowserRouter routes={[
      {
        path: "",
        component: <Home></Home>
      }
    ]}>    
    </BrowserRouter>
  ) 
}

export default App;
