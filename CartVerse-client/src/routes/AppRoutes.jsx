import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Shop from "../pages/Shop";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element ={<Home/>}/>
                <Route path="about/" element ={<About/>}/>
                <Route path="products/" element ={<Shop/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;