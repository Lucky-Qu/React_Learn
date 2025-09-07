import {createSlice} from "@reduxjs/toolkit";

const counterStore = createSlice(
    {
        //必选项，用于生成action的type前缀
        name: "counter",
        //必选项，用于初始化state的值
        initialState: {
            count: 0,
        },
        //必选项，在reducer里编写操作state的方法
        //注意，在函数内可以操作数据，因为在RTK内部借助Immer实现了不可变数据的修改
        reducers: {
            increment: (state) => {
                state.count ++
            },
            decrement: (state) => {
                state.count --
            },
            //第二个变量action中有payload属性，当调方法时传入的参数会存储在payload上
            setToNum: (state,action) => {
                state.count = action.payload
            }
        }
    }
)
// createSlice会生成action creators，存放在counterStore.actions下
// 所以使用对象解构的方法来提取出来
const {increment, decrement, setToNum} = counterStore.actions
// 导出reducer给Store使用
const counterReducer = counterStore.reducer

export {increment, decrement, setToNum}
export default counterReducer