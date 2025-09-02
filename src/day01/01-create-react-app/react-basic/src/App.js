//项目的根组件
//app被index.js引入，渲染到public/index.html(root)
import {useState} from "react"

function App() {
    //JSX，JSX是JavaScript和XML（HTML）的缩写，表示在js代码中编写HTML模版结构，是React中编写UI模版的方式
    //通过解析器将其翻译为js代码执行（BABEL)
    const pi = 3.14
    const programmingLanguages = [
        {id: "1001", name: "Golang"},
        {id: "1002", name: "TypeScript"},
        {id: "1003", name: "JavaScript"},
    ]
    const selectNum = 1
    function printSelectedNumber(num){
        switch (num){
            case 1: return <h3>1</h3>
            case 2: return <h3>2</h3>
            case 3: return <h3>3</h3>
        }
    }
    const giveMePi = (pi) => {
        console.log("I Got Pi!")
    }
    const expFunc = (num1, e) => {
        console.log(num1)
        console.log(e)
    }
    function SuperButton(){
        return <button onClick={() => console.log("msg from Super Button!")}>I`m Super Button!!</button>
    }
    const [amazingNum, setAmazingNum] = useState(0)
    const [amazingPerson, setAmazingPerson] = useState({
        name: "LuckyQu",
        age: 18
    })
  return (
    <div className="App">
        {/*在JSX中使用{}来包裹想要执行的js表达式*/}
        This is an app
        {/*使用引号传递字符串*/}
        {"Hello There"}
        {/*识别js变量*/}
        {pi}
        {/*函数调用*/}
        {function (){return "Hi"}()}
        {/*方法调用*/}
        {new Date().getTime()}
        {/*使用js对象*/}
        <div style={{backgroundColor:"blue"}}></div>
        {/*需要注意的是，表达式是表达式，语句是语句，类似if-else，switch之类的语句是不能在大括号里执行的*/}
        <br></br>
        {/*渲染列表*/}
        {/*在react当中，要求对循环渲染的元素指定一个独一无二的key值，通常用id值进行绑定*/}
        {/*在循环遍历中，要循环哪个结构，就return哪个结构*/}
        {/*key的作用：react内部使用，用于提升性能的*/}
        {programmingLanguages.map(item => <li key={item.id}>{item.name}</li>)}
        <br></br>
        {/*在jsx中实现条件渲染*/}
        {/*react中，可以通过逻辑与运算符和三元运算符来实现条件渲染*/}
        {/*&&左边的值为true则渲染，三元运算符为，如果真，渲染左边的，如果假，渲染右边的*/}
        {true && <h1>Hiiiiii</h1>}
        {false && <h1>Hiiiiii</h1>}
        {true ? <h2>Hello</h2>:<h2>Ciallo</h2>}
        {false ? <h2>Hello</h2>:<h2>Ciallo</h2>}
        {/*对于复杂的条件渲染，可以使用函数来进行渲染，如：*/}
        {printSelectedNumber(selectNum)}
        {/*React中，绑定事件遵循on+事件名称+{调用函数}的方法*/}
        <button onClick={() => console.log("按钮被点击了")}>点我</button>
        {/*获取事件参数只需要在函数形参声明参数即可*/}
        <button onClick={(e) => {
            console.log(e)
        }}>点我点我</button>
        {/*需要传递自定义参数的时候，事件绑定的位置改造成箭头函数的写法*/}
        {/*不能直接调用函数，要用箭头函数的写法*/}
        <button onClick={() => giveMePi(pi)}>Give me Pi</button>
        {/*想要同时传递自定义参数和事件对象e时，参考以下的写法(函数见expFunc)*/}
        <button onClick={(e) => expFunc(123, e)}>自定义参数和事件对象</button>
        {/*组件*/}
        {/*在React中，规定一个组件就是首字母大写的一个函数，内部存放了组件的逻辑和视图UI，渲染组件只需要把组件以标签的方式写出即可*/}
        {/*定义了一个SuperButton组件，见上方const区域*/}
        <hr></hr>
        {/*渲染组件时，可以采用自闭合或成对标签的方式书写*/}
        {/*自闭合*/}
        <SuperButton />
        {/*成对标签*/}
        <SuperButton></SuperButton>
        {/*useState*/}
        {/*useState是一个React Hook（函数），他可以提供一个状态变量，从而影响渲染结果*/}
        {/*与普通变量不同的是，状态变量发生改变时，视图中的ui组件也会跟着变化*/}
        {/*useState是一个函数，接收的参数为状态变量的初始值*/}
        {/*他会返回一个数组，数组中的第一个值是状态变量，第二个是一个函数，用来修改状态变量的值*/}
        {/*见第三十二行*/}
        {/*要使用这个函数，需要先引入，格式参考第三行*/}
        <button onClick={() => setAmazingNum(amazingNum + 1)}>{amazingNum}</button>
        {/*关于状态，React规定，状态应当是只读的，应当去替换他而不是修改他，直接修改他并不能引起视图更新，称作状态不可变*/}
        {/*对于状态对象，应当用一个全新的对象来替换他，而非直接修改，如：*/}
        <button onClick={() => setAmazingPerson({
            //使用展开运算符，将原对象属性展开至此，然后重写age即可实现修改age
            ...amazingPerson,
            age: 21
        })}>amazingPersson</button>
    </div>
  )
}

export default App;
