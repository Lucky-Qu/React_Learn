import { createRoot } from 'react-dom/client'
import UseEffectLearn from "./useEffectLearn.tsx"
import App from './App.tsx'
import MyHook from "./myHook.tsx";


createRoot(document.getElementById('root')!).render(
    <div>
        <App />
        <UseEffectLearn></UseEffectLearn>
        <MyHook></MyHook>
    </div>
)
