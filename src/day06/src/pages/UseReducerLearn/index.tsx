import BackToNavi from "../../components/BackToNavi/BackToNavi.tsx";
import {useReducer} from "react";

const UseReducerLearn = () => {
    const reducer = (state: number, action: {type :string}) => {
        switch (action.type) {
            case "plus": return state + 1
            case "reduce": return state - 1
            default: return state
        }
    }
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <>
            <div>
                一、useReducer通常被作为复杂的状态存储用
                首先声明一个函数，他的入参为一个state和一个action
                内部对action.type做一个switch从而操作state
                返回经过操作的state的值
            </div>
            <div>
                二、使用useReducer钩子函数，传入两个值，第一个为
                刚刚声明的函数，第二个为状态的初始值，得到一个数组
                分别为状态参数和dispatch函数
            </div>
            <div>
                三、使用dispatch函数，他接收一个对象，填写其中的
                type属性，他会通知调用钩子函数时传入的函数进行操作
                然后渲染新UI
            </div>
            <div>一个计数器案例</div>
            <div>当前数值：{state}</div>
            <button onClick={() => {dispatch({type : "plus"})}}>增加</button>
            <button onClick={() => {dispatch({type: "reduce"})}}>减少</button>
            <BackToNavi />
        </>
    )
}

export default UseReducerLearn