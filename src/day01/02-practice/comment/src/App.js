import "./style.css"
import {useState} from "react";

function App() {
    //事先拥有的数据，实际上应当从后端拿
    //先定义登陆好的用户
    const userNow = {
        name: "LuckyQu",
        gender: "male",
        uid: "7777777"
    }
    //定义已有的评论
    const commentAlreadyHas = [
        {
            userName: "Lucky",
            likes: 77,
            date: "2025-09-01",
            content: "今天学习了 React，感觉很有趣！",
            cid:"1001"
        },
        {
            userName: "Alice",
            likes: 11,
            date: "2025-09-02",
            content: "TypeScript 的类型系统真的很好用。",
            cid:"1002"
        },
        {
            userName: "Bob",
            likes: 4,
            date: "2025-09-02",
            content: "Golang 在后端开发上效率很高。",
            cid:"1003"
        },
        {
            userName: "LuckyQu",
            likes: 48,
            date: "2025-09-02",
            content: "Golang Goat。",
            cid:"1004"
        }
    ]
    //评论应当是一个状态参数，使用.map方法来遍历渲染
    const [comments, setComments] = useState(commentAlreadyHas)
    const delCommentById = (id) => {
        setComments(comments.filter((item) => {
            return id !== item.cid
        }))
    }
    function printComment(comment){
        return (
            <div>
                <div>{comment.userName}</div>
                <div>{comment.content}</div>
                <div>
                    <span>{comment.date},{comment.likes}Likes</span>
                    {comment.userName === userNow.name &&
                        <button onClick={
                            () => delCommentById(comment.cid)
                        }>删除</button>
                    }
                </div>
            </div>
        )
    }
    const [commentContent, setCommentContent] = useState("")
    function WriteComment(){
        return (
            <div>
                <input
                    onChange={
                    (e) => {
                        setCommentContent(e.target.value)
                    }
                }
                    value={commentContent}
                ></input>
                <button onClick={
                    () => {setComments([...comments, {
                        userName: userNow.name,
                        likes: 0,
                        date: Date.now().toString(),
                        content: commentContent,
                        cid:"1005"
                    }])
                    setCommentContent("")
                    }
                }>提交</button>
            </div>
        )
    }
    return (
        <div className="App">
            <WriteComment />
            {comments.map(item => (<div key={item.cid}>
                {printComment(item)}
            </div>))}
        </div>
    );
}

export default App;
