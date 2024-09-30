import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "../Home";
import Citas from '../Citas';
import Registro from "../Registro";
import { NavBar } from "../../components/NavBar";
import Footer from "@/components/Footer";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home/> },
    { path: "/citas", element: <Citas/> },
    { path: "/registro", element: <Registro/> },
    {path:"/registro",element:<Registro/>}
    
  ]);
  return routes;
};

const App = () => {
  return (
    
    <BrowserRouter >
      <NavBar/>
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  );
};
export default App;
