import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralPage from "./views/GeneralPage";
import './App.css';
import 'swiper/css';
import HomePage from "./views/HomePage";


export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GeneralPage page={'PRODUCTS_LIST'}/>}/>
                    <Route path="/dynamic" element={<HomePage />}/>
                    <Route path="/tricou" element={<GeneralPage page={'TSHIRT_LIST'}/>}/>
                    <Route path="/hanorac" element={<GeneralPage page={'HOODIE_LIST'}/>}/>
                    <Route path="/bluza" element={<GeneralPage page={'BLOUSE_LIST'}/>}/>
                    <Route path="/blugi" element={<GeneralPage page={'JEANS_LIST'}/>}/>
                    <Route path="/pantaloni" element={<GeneralPage page={'TROUSERS_LIST'}/>}/>
                    <Route path="/camasa" element={<GeneralPage page={'SHIRT_LIST'}/>}/>
            </Routes>
        </BrowserRouter>
    );
}


