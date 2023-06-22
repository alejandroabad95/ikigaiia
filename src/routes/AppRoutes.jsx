import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element= {<HomePage/>}/>
            <Route path="/listas" element={<h1>ikigai-inicio</h1>} />
            <Route path="/registro" element={<h2>ikigai-final</h2>} />
        </Routes>

    )
}


export default AppRoutes