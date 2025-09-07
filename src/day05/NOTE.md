# 目录设计结构
## src目录下
apis 接口

assets 静态资源文件

components 通用组件

pages 页面级组件

router 路由Router

store redux状态

utils 工具函数

## 建议
src/
├── apis/           # 接口请求层（axios封装、接口方法）
├── assets/         # 静态资源（images、icons、styles...）
├── components/     # 通用组件（Button、Modal...）
├── hooks/          # 自定义hooks
├── layouts/        # 页面布局
├── pages/          # 页面级组件（按路由划分）
├── router/         # 路由配置
├── store/          # 全局状态管理（Redux/RTK）
├── types/          # 全局TS类型定义
├── utils/          # 工具函数
├── config/         # 配置文件（环境变量、常量）
└── main.tsx        # 入口文件