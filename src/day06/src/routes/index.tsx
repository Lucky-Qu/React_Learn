import {createBrowserRouter} from "react-router-dom"
import Navi from "../pages/Navi"
import NotFound from "../pages/NotFound"
import UseReducerLearn from "../pages/UseReducerLearn";
import UseMemo from "../pages/UseMemo";
import ReactMemo from "../pages/ReactMemo";

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
            path:"/use-memo",
            element: <UseMemo />
        },
        {
            path:"/react-memo",
            element: <ReactMemo />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]
)

export default router