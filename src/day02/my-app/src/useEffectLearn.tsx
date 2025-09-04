import {useEffect, useState} from "react";

//在副作用函数里可以声明一些副作用操作，return函数里可以写清理副作用的操作
function CleanEffect (){
    useEffect(() => {
        const interId = setInterval(()=>{
            console.log("正在运行")
        }, 1000)
        return () => {
            //当组件被卸载时执行
            clearInterval(interId)
        }
    }, []);
    return (
        <div>
            Hi, Im Effect
        </div>
    )
}

function UseEffectLearn() {
    // useEffect用于声明由渲染引起变化而非由事件引起变化的事件
    // 运行了一个后端程序来演示
    //参数1是一个函数，可以把它当作一个副作用函数，函数内部放置要执行的函数
    //参数2是一个数组，其内放置依赖项，当其为空时，代表只执行一次，不同依赖项会影响第一个参数函数的执行
    //依赖项为空时，副作用函数在组件初始渲染和组件更新时执行
    //依赖项为空数组时，副作用函数只执行一次，在初始渲染的时候执行
    //依赖项为特定时，在特性依赖项变换的时候执行
    useEffect(() => {
        async function getMsg()  {
            const response = await fetch("http://localhost:7777")
            const data = await response.json()
            console.log( data)
        }
        getMsg()
    }, [])
    const [sw, setSw] = useState(true)
    return (
        <div>
            Hello There
            {sw && <CleanEffect />}
            <button onClick={() => setSw(!sw)}>Click Here</button>
        </div>
    )
}

export default UseEffectLearn