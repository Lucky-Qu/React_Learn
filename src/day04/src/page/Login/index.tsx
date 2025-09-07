import {Link, useParams, useSearchParams} from "react-router-dom";

const Login = () => {
    const [param] = useSearchParams()
    const paramTwo = useParams()
    return (
        <>
            <div>我是登陆页</div>
            <Link to="/article" >跳转到文章页</Link>
            <div>这是携带来的值:{param.get("data")}</div>
            <div>这是params方法获得的值：{paramTwo.data}</div>
        </>
    )
}

export default Login