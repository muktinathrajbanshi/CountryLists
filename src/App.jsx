import { createBrowserRouter } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"about",
    element:<About />
  },
  {
    path:"country",
    element:<Country />
  },
  {
    path:"contact",
    element:<Contact />
  }
]);

const App = () => {
  return <h1>Hello, Welcome to my new Project!!!</h1>;
};

export default App;
