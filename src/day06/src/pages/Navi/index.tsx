import {useNavigate} from "react-router-dom";

const Navi = () => {
    const navi = useNavigate()
    return (
        <>
            <div>
                导航页
                <hr />
                <button onClick={() => {navi("/use-reducer-learn")}}>UseReducerLearn</button>
            </div>
        </>
    )
}

export default Navi