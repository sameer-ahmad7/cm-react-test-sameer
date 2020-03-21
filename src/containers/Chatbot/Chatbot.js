import React,{useState} from 'react';
import ChatbotInput from "../../components/ChatbotInput/ChatbotInput";
import { connect } from 'react-redux';
import { string } from 'prop-types';

//I have not worked in typescript therefore I had trouble connecting redux 
//although i did try to define actions based on my understanding

const Chatbot = props=>{
    const[chatResult,setChatResult]=useState("");
    const calculateResult=value=>{
        if(!value || value.trim()==="")
        {
            setChatResult("Invalid Input"); //dispatch action instead of setting state
        }
        else{
            let numbers= value.split("+");
            if(numbers.length>1){
                let sum= numbers.reduce((prevValue,currValue)=>{
                    let operand1=parseInt(prevValue);
                    let operand2=parseInt(currValue);
                    if(isNaN(operand1) || isNaN(operand2))
                    {
                        return null;
                    }
                    else{
                        return operand2+operand1;
                    }
                })
                if(sum && !isNaN(sum)){
                    setChatResult(`Result is ${sum}`); //dispatch action instead of setting state
                }
                else{
                    setChatResult("Invalid Input"); //dispatch action instead of setting state
                }
            }
            else{
                setChatResult("Invalid Input");
            }
        }
    }
    return(
        <div>
        <h1>Welcome to ChatBot</h1>
        <ChatbotInput
        calculateResult={calculateResult} 
        />
        {chatResult&&(
           <p>{chatResult}</p>)
}
        </div>
    )
}

export default Chatbot;
