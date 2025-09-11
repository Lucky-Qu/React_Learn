import BackToNavi from "../../components/BackToNavi/BackToNavi.tsx";
import DoNotReRenderMe from "../../components/DoNotReRender";
import {memo, useCallback, useState} from "react";

const ReactMemo = () => {
    const MemoDoNotReRenderMe = memo(DoNotReRenderMe)
    const [num, setNum] = useState(0)
    console.log("父组件被重新渲染了！")
    const sumFunc = (num1: number,num2: number) => {
        return num1 + num2
    }
    const callbackSumFunc = useCallback(sumFunc, []);
    return (
        <>
            <div>
                使用memo函数包裹在父组件被重新渲染时不需要被重新渲染的子组件即可
            </div>
            <div>
                他会返回一个新的组件，使用新的组件即可
            </div>
            <div>
                如果有props，在props改变的时候会重新渲染子组件
            </div>
            <div>
                react会使用Object.Is来比较，全部返回true才会跳过渲染，对于复杂类型，只要引用类型发生改变，就判断为改变
            </div>
            <div>
                但当props中有函数的时候，在每次渲染的时候，函数都会改变，所以引入useCallback来将函数缓存
            </div>
            <MemoDoNotReRenderMe />
            <div>子组件被渲染时，控制台会打印，使用一个状态变量来让父组件重新渲染</div>
            <button onClick={() => {setNum(num + 1)}}>重新渲染父组件</button>
            <button onClick={() => {callbackSumFunc(1,2)}}>Not Matter</button>
            <BackToNavi />
        </>
    )
}

export default ReactMemo