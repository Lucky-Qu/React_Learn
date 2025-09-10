import {useNavigate} from "react-router-dom";


const Navi = () => {
    const navi = useNavigate()
    return (
        <>
            <div>
                导航页
                <hr />
                <button onClick={() => {navi("/use-reducer-learn")}}>UseReducerLearn</button>
                <hr />
                <button onClick={() => {navi("/use-memo")}}>UseMemo</button>
                <hr />
                <button onClick={() => {navi("/react-memo")}}>React-Memo</button>
            </div>
        </>
    )
}

export default Navi