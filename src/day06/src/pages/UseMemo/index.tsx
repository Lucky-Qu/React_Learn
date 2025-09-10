import BackToNavi from "../../components/BackToNavi/BackToNavi.tsx";
import {useMemo, useState} from "react";

const UseMemo = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const result = useMemo(() => {
        return num1
    },[num1])
    console.log("组件被渲染了")
    return (
        <>
            <div>
                useMemo的作用在组件每次渲染的时候缓存计算的结果
            </div>
            <div>
                使用useMemo钩子函数，接收两个参数，第一个是回调函数，第二个是依赖项，只有当依赖项发生改变时，才会调用回调函数进行改变值
            </div>
            <div>
                一个示例
            </div>
            <button onClick={() => {setNum1(num1 + 1)}}>{num1}</button>
            <button onClick={() => {setNum2(num2 + 1)}}>{num2}</button>
            <div>{result}</div>
            <BackToNavi />
        </>
    )
}

export default UseMemo