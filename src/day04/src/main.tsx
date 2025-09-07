import { createRoot } from 'react-dom/client'
import App from './App.tsx'
//引入createBrowserRouter函数和RouterProvider组件
//然后将路由与组件进行绑定
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter(
    [
        {
            path: "/login",
            element:<div>我是登陆页</div>
        },
        {
            path: "/register",
            element:<div>我是注册页</div>
        },
        {
            path:"/",
            element:<App />
        }
    ]
)
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}></RouterProvider>
)
