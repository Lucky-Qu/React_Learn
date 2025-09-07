import {createSlice} from "@reduxjs/toolkit";
interface Channel{
    name: string,
    content: string
}
const channelStore = createSlice(
    {
        name: "channel",
        initialState: {
            channels: [] as Channel[],
        },
        reducers: {
            setChannel: (state,action)=>{
                state.channels = action.payload
            }
        }
    }
)
const channelReducer = channelStore.reducer
const {setChannel} = channelStore.actions
export {setChannel}
export default channelReducer