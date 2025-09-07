import Article from "../page/Article"
import Login from  "../page/Login"
import {createBrowserRouter} from "react-router-dom"
import Author from "../page/Author"
import About from "../page/About"
import Introduce from "../page/Introduce"
import NotFound from "../page/NotFound"

const router = createBrowserRouter(
    [
        {
            path: "/article",
            element: <Article />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/login/:data",
            element: <Login />
        },
        {
            path: "/introduce",
            element: <Introduce />,
            children: [
                {
                    index: true,
                    element: <About />
                },
                {
                    path: "author",
                    element: <Author />
                }
            ]
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]
)

export default router