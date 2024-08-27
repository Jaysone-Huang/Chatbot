"use client";
import React from 'react'
import { Message, useChat } from 'ai/react'
import Messages from './Messages';
import ChatInput from './ChatInput';

const ChatWrapper = ({sessionId, initialMessages}:{sessionId:string, initialMessages: Message[]}) => {
  const { messages, handleInputChange, handleSubmit, input, setInput } = useChat({
    api: '/api/chat-stream',
    body: {sessionId},
    initialMessages,
  });
  return (
    <div className='relative min-h-full bg-bk flex divide-y divide-secondary flex-col justify-between gap-2'>
      <div className='flex-1 text-white bg-primary justify-between flex flex-col'>
        {/* {JSON.stringify(messages)} */}
        <Messages messages={messages}/>
      </div>
      {/* <form className='flex justify-center py-3 bg-bk ' action="" onSubmit={handleSubmit}>
        <input className='text-white bg-black  rounded-lg' value={input} onChange={handleInputChange} type="text" />
        <button className='bg-accent text-primary border border-primary rounded-lg min-w-20' type='submit'>send</button>
      </form> */}
      <ChatInput
       handleInputChange={handleInputChange}
       handlesubmit={handleSubmit}
       input={input}
       setInput={setInput}/>
    </div>

  )
}

export default ChatWrapper
