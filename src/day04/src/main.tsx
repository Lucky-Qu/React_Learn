import { createRoot } from 'react-dom/client'
//然后将路由和组件进行绑定
import {RouterProvider} from "react-router-dom"
import router from "./router"

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}></RouterProvider>
)
