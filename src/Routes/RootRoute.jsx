import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu/OurMenu";


const router  = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/our-menu",
                element:<OurMenu/>
            }
        ]
    }
])


export default router;