
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            }
        ]
    },

]);

export default router;