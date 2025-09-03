import {useRef, useState} from "react";

interface SonAppProps {
    msg: string
}
const SonApp= (props: SonAppProps)=>{
    return (
        <div>
            <p>
                {props.msg}
            </p>
        </div>
    )
}

function App() {
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef(null)
    const printInputRef = () =>{
        console.dir(inputRef.current)
    }
    const msg: string = "Hello form App"
  return (
      <div>
          {/*表单受控绑定*/}
          {/*流程*/}
          {/*1.将value属性绑定react状态*/}
          {/*2.绑定事件，通过参数拿到最新的值，反向绑定状态*/}
          <input
              value={inputValue}
              onChange={(e)=> setInputValue(e.target.value)}
          ></input>
          {/*当前主流的思想是，数据驱动视图，所以非必要情况下尽量不去直接操作DOM树*/}
          {/*获取DOM元素的步骤为*/}
          {/*1.使用钩子函数useRef来获取一个Ref对象*/}
          {/*2.将ref对象绑定到dom标签身上*/}
          {/*3.当dom可用时，使用ref.current来获取dom*/}
          <hr />
          <input ref={inputRef}></input>
          <button onClick={printInputRef}>点我从dom获取旁边元素</button>
          <hr />
          <h1>通信</h1>
          <p>组件通信就是在组件之间的数据传递，根据组件嵌套关系的不同，有不同的通信方法</p>
          <p>父传子的实现</p>
          <p>1.在子组件上绑定属性</p>
          <p>2.子组件通过props参数接收数据</p>
          {/*通常来说，子组件接收参数可以为任何名，但约定俗成为props，接收到的是一个对象，对象内字段名为传入时的属性名*/}
          <SonApp msg={msg}/>
      </div>
  )
}

export default App
