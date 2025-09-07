import {Outlet, useNavigate} from "react-router-dom";

const Introduce = () => {
    const navi = useNavigate()
    return (
        <>
            <div>我是介绍页面</div>
            <button onClick={() => {navi("")}}>点击我查看关于页</button>
            <button onClick={() => {navi("author")}}>点击我查看作者页</button>
            <Outlet />
        </>
    )
}
export default Introduce