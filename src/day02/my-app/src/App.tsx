import {useRef, useState} from "react";

function App() {
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef(null)
    const printInputRef = () =>{
        console.dir(inputRef.current)
    }
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
          <hr/>
          <input ref={inputRef}></input>
          <button onClick={printInputRef}>点我从dom获取旁边元素</button>
      </div>
  )
}

export default App
