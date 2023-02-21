import MenuItems from "./components/MenuItems";
import {Outlet} from "react-router-dom";

const Body = () => {
    return (
        <div className={"flex"}>
        <MenuItems />
        <Outlet/>
        </div>
    )
}

export default Body;
