//index.js为一切的主入口，起到的作用就是将项目的根组件以react的方式渲染到页面中
//引入两个核心依赖包react和react-dom
import React from 'react';
import ReactDOM from 'react-dom/client';
//导入项目的根组件
import App from './App';
//把App根组件渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
