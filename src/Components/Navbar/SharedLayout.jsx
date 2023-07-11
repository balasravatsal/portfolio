import {Outlet} from "react-router-dom";
import ResponsiveNavbar from "./ResponsiveNavbar.jsx";

const SharedLayout = () => {
    return (
        <div>
            <ResponsiveNavbar />
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default SharedLayout;