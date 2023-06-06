import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import HeaderBar from "./components/header/headerBar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Category from "./components/category/category";
import SingleProduct from "./components/singleProduct/singleProduct";
import Newsletter from "./components/footer/newsletter/newsletter";
import AppContext from "./utils/context";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <HeaderBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
