import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import IkigaiFirstPage from "../pages/IkigaiFirstPage/IkigaiFirstPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element= {<HomePage/>}/>
            <Route path="/ikigai-1" element={<IkigaiFirstPage/>}/>
            <Route path="/ikigai-2" element={<h2>ikigai-final</h2>} />
        </Routes>

    )
}


export default AppRoutes