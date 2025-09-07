# 笔记
## Redux
Redux是一个状态管理工具，可以独立于框架运行，为了职责清晰，数据流向明确，
Redux将数据分为了三个核心概念，分别为state、action、reducer
### 在React中引入Redux和React Toolkit
npm i @reduxjs/toolkit react-rudux
### state
一个对象 存放着我们管理的数据状态
### action
一个对象 用来描述怎么改数据
### reducer
一个函数，根据action的描述生成一个新的state

## Store目录设计
通常来讲，集中状态管理的部分会有创建出一个单独的store目录，
目录下有一个入口文件和modules文件夹，modules用于存放
不同业务分类下的子store，入口文件将modules的子模块中组合并导出store

演示为使用React Toolkit创建counterStore