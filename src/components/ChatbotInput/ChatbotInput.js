import React,{useState} from 'react';

const ChatbotInput = props=>{
    const [chatMessage,setChatMessage]=useState("");
    return (
    <div>
    <input type="text" id="chatMessage" value={chatMessage} onChange={(event)=>setChatMessage(event.target.value)}/>
 <button onClick={()=>props.calculateResult(chatMessage)}>Submit</button>
 </div>
    )
}

export default ChatbotInput;