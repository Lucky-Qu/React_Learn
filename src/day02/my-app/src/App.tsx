import {createContext, useContext, useRef, useState} from "react";
import * as React from "react";

interface SonAppProps {
    msg: string
    children?: React.ReactNode
}
interface PracticeSonAppProps {
    onSendMsgToApp: (msg: string) => void
    children?: React.ReactNode
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

const PracticeSonApp = (props: PracticeSonAppProps) => {
    const [msg, setMsg] = useState('')
    const sendMsgToApp = (msg: string) => {
        setMsg(msg)
        props.onSendMsgToApp(msg)
    }
    return (
        <div>
        <input value={msg} onChange={(e)=>sendMsgToApp(e.target.value)}></input>
        <p>输入向app传入的值</p>
        </div>
    )
}
const GrandFatherMsg = createContext("")

const GrandFather = () =>{
    return (
        <GrandFatherMsg.Provider value={"这是一条来自上两层组件的消息"}>
            <Father />
        </GrandFatherMsg.Provider>
    )
}
const Father = () => {
    return (
        <Son />
    )
}
const Son = () => {
    const msg = useContext(GrandFatherMsg)
    return (
        <span>{msg}</span>
    )
}

function App() {
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef<HTMLInputElement | null>(null)
    const printInputRef = () =>{
        console.dir(inputRef.current)
    }
    const [receivedMsg, setReceivedMsg] = useState("")
    const msg: string = "Hello from App"
    const sendMsgToApp = (msg: string) => {
        setReceivedMsg(msg)
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
          {/*props可传递不同类型的数据，包括但不限于数字，字符串，布尔值，数组，对象，函数，JSX*/}
          {/*父组件的数据只能由父组件进行修改，props是只读的*/}
          {/*特殊的props*/}
          {/*当将文本写在子组件的标签下，子组件将会自己接收一个props，属性名为children*/}
          <SonApp msg={""}>
              <span>Im a span</span>
          </SonApp>
          <p>子传父的实现</p>
          <p>核心要点：子组件调用父组件的函数，将想要传递的数据传入即可</p>
          {/*约定俗成：传递函数的时候，用on来开头*/}
          <hr />
          <PracticeSonApp onSendMsgToApp={sendMsgToApp}></PracticeSonApp>
          <p>这是App接收到的消息：{receivedMsg}</p>
          <p>在兄弟组件之间的通信采取A元素传给父元素，父元素再传给B元素的方法</p>
          <hr />
          <p>跨层传输</p>
          <p>跨层传递需要借助context来进行传输</p>
          <p>使用createContext来创造一个context对象，在顶层组件中使用context对象中的Provider方法来提供数据</p>
          <p>在需要接受数据的底层组件中，使用useContext来获取</p>
          <p>定义三个组件来演示</p>
          <GrandFather />
      </div>
  )
}

export default App
