import NavBar from "./Navbar/NavBar";
import { Outlet } from 'react-router-dom'

const WithNav = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default WithNav;