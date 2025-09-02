//项目的根组件
//app被index.js引入，渲染到public/index.html(root)
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
        <button onClick={() => {console.log("按钮被点击了")}}>点我</button>
        {/*获取事件参数只需要在函数形参声明参数即可*/}
        <button onClick={(e) => {
            console.log(e)
        }}>点我点我</button>
        {/*需要传递自定义参数的时候，事件绑定的位置改造成箭头函数的写法*/}
        {/*不能直接调用函数，要用箭头函数的写法*/}
        <button onClick={() => {giveMePi(pi)}}>Give me Pi</button>
    </div>
  )
}

export default App;
