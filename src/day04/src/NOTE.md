# React-Router学习

## 用处
将不同的访问URL对应渲染不同的组件

## 引入React-Router-Dom
npm i react-router-dom

## 优化目录结构
在src下新建page文件夹，将组件在其中进行书写

在src下新建router文件夹，将router在其中进行配置

最后在主入口引入RouterProvider，来进行配置绑定

## 在路由内进行跳转
### 声明式导航
使用内置的Link组件，用to属性来实现跳转页面

### 编程式导航
使用useNavigate钩子函数来获得一个导航方法，再使用方法时，传递要跳转到路径即可
更加灵活

## 参数传递
### searchParams
#### 传参
当跳转的时候，可以在导航的链接中携带参数从而进行传递
#### 获取参数
获取参数的时候，使用钩子函数useSearchParams来获取参数
### Params
#### 传参
在路由上使用占位符来进行配置
#### 获取参数
获取的时候使用钩子函数useParams来获取参数，useParams返回的
直接就是一个对象，使用点来调用其身上的get方法，传入在router中配置
的占位符id来获得内容

## 嵌套路由
使用配置children属性来进行路由的嵌套，使用Layout组件来作为
嵌套路由的渲染出口
注意，子路由的路径里不能以“/”开头，不然会以为是根路径

### 默认二级路由
在配置二级路由的时候，去掉path属性，新增属性index并设置为true
来设置访问一级路由时渲染的二级路由

## 404路由
为了用户体验，通常在路由表的最后一个设置为一个NotFound组件，
路径使用*通配符来进行匹配，用于呈现404的内容

## 路由模式
### history模式
#### url表现
localhost:7777/login
#### 底层原理
history对象加pushState事件
#### 是否需要后端支持
需要
### hash模式
#### url表现
localhost:7777/#/login
#### 底层原理
监听 hashChange事件
#### 是否需要后端支持
不需要