import {useState} from "react";

function useMyHook(): [boolean, ()=>void] {
    //以一个切换状态的函数为例
    const [state, setState] = useState(true)
    const changeState = ()=>{
        setState(!state)
    }
    return [state, changeState]
}

function MyHook() {
    //封装自定义Hook函数
    //1.定义一个use打头的函数
    //2.封装逻辑
    //3.返回需要用到的状态和函数等
    //4.在需要调用的组件中使用函数调用
    //使用规则
    //1.只能在组件或其他hook函数中调用
    //2.只能在组件的顶层调用，不能嵌套在if，for，其他函数中
    const [x, y] = useMyHook()
    return (
        <div>
            {x && <p>HelloThere</p>}
            <button onClick={y}>Click Me!</button>
        </div>
    )

}
export default  MyHook