import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "./store";
import {increment,decrement,setToNum} from "./store/modules/counterStore.ts";
import {setChannel} from "./store/modules/channelStore.ts";

interface Channel {
    title: string,
    content: string
}
function App() {
  //在React组件中使用Store内的数据，需要使用一个钩子函数useSelector来把store中的数据映射到组件中
  // 在store的入口文件index中字段名是什么，这里就是什么
  // 想要修改store中的数据，需要使用React中的另一个钩子函数 useDispatch，他的作用是生成提交action对象的dispatch函数
  const {count} = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()
    const channels = useSelector((channels: RootState)=>channels.channels)
  return (
    <div>
      <div>目前的点击数：{count}</div>
      <button onClick={() => dispatch(increment())}>点击增加</button>
      <button onClick={() => dispatch(decrement())}>点击减少</button>
      <button onClick={() => dispatch(setToNum(10))}>点击设置到10</button>
        <hr />
        <button onClick={async () => {
            const res = await fetch("http://localhost:7777")
            const channels: Channel[] = await res.json()
            dispatch(setChannel(channels))
        }}>点击获取后端信息</button>
        <div>获取到的信息：{channels.channels.map(item => <div>{item.content}</div>)} </div>
    </div>
  )
}

export default App
