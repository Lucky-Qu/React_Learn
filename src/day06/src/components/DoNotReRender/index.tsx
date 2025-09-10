const DoNotReRenderMe = (props: number) => {
    console.log("我被渲染了！")
    return (
        <>
            <div>
                props:{props}
            </div>
            <div>
                我是一个不需要被二次渲染的组件，除非我的props改变
            </div>
        </>
    )
}

export default DoNotReRenderMe