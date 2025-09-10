import {useNavigate} from "react-router-dom";

const BackToNavi = () => {
    const navi = useNavigate()
    return (
        <>
            <button onClick={() => {navi("/")}}>返回到导航页</button>
        </>
    )
}

export default BackToNavi