import {createBrowserRouter} from "react-router-dom"
import Navi from "../pages/Navi"
import NotFound from "../pages/NotFound"
import UseReducerLearn from "../pages/UseReducerLearn";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Navi />
        },
        {
            path:"/use-reducer-learn",
            element: <UseReducerLearn />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]
)

export default router