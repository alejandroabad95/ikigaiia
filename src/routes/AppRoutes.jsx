import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import IkigaiFirstPage from "../pages/IkigaiFirstPage/IkigaiFirstPage"
import IkigaiSecondPage from "../pages/IkigaiSecondPage/IkigaiSecondPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element= {<HomePage/>}/>
            <Route path="/ikigai-1" element={<IkigaiFirstPage/>}/>
            <Route path="/ikigai-2" element={<IkigaiSecondPage/>} />
        </Routes>

    )
}


export default AppRoutes