import {configureStore} from "@reduxjs/toolkit";
import counterStore from "./modules/counterStore.ts";
import channelStore from "./modules/channelStore.ts";
//创建根store组合子模块
const store = configureStore(
    {
        reducer: {
            counter: counterStore,
            channels: channelStore
        }
    }
)
export type RootState = ReturnType<typeof store.getState>
export default store