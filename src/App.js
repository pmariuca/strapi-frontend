import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import './App.css';
import 'swiper/css';


export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout page={'PRODUCTS_LIST'}/>}/>
                    <Route path="/tricou" element={<Layout page={'TSHIRT_LIST'}/>}/>
                    <Route path="/hanorac" element={<Layout page={'HOODIE_LIST'}/>}/>
                    <Route path="/bluza" element={<Layout page={'BLOUSE_LIST'}/>}/>
                    <Route path="/blugi" element={<Layout page={'JEANS_LIST'}/>}/>
                    <Route path="/pantaloni" element={<Layout page={'TROUSERS_LIST'}/>}/>
                    <Route path="/camasa" element={<Layout page={'SHIRT_LIST'}/>}/>
            </Routes>
        </BrowserRouter>
    );
}


