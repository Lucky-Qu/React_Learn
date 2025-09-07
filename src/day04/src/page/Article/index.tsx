import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Article = () => {
    const navi = useNavigate()
    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            <div>我是文章页</div>
            <button onClick={() => {navi("/login")}}>点击登陆</button>
            <hr />
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={() => {navi("/login?data="+inputValue)}}>点击携带输入框中的参数跳转登陆页</button>
            <button onClick={() => {navi("/login/"+inputValue)}}>点击携带输入框中的参数跳转登陆页，使用params方法</button>
        </div>
    )
}
export default Article