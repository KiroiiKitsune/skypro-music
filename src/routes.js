import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page/main-page";



export default function AppRouters (props) {
    return (
        <Routes>
            <Route path='/' element={<MainPage handleLogout={props.handleLogout}/>} />
        </Routes>
    )
} 