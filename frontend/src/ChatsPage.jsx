import {MultiChatSocket, MultiChatWindow, useMultiChatLogic}from 'react-chat-engine-advanced'
const ChatsPage =(props) => {
    const chatProps = useMultiChatLogic('ffe0caf8-5be3-45eb-8489-5865d0466be9',props.user.username, props.user.secret);
    return (
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow{...chatProps} style={{height:'100%'}}/>
        </div>
    )
}

export default ChatsPage