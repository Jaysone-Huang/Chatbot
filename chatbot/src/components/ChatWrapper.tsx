"use client";
import React from 'react'
import { useChat } from 'ai/react'
import Messages from './Messages';

const ChatWrapper = ({sessionId}:{sessionId:string}) => {
  const { messages, handleInputChange, handleSubmit, input } = useChat({
    api: '/api/chat-stream',
    body: {sessionId},
  });
  return (
    <div className='relative min-h-full bg-primary flex divide-y divide-secondary flex-col justify-between gap-2'>
      <div className='flex-1 text-white bg-primary justify-between flex flex-col'>
        {/* {JSON.stringify(messages)} */}
        <Messages messages={messages}/>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input className='text-white border bg-secondary border-accent rounded-lg focus' value={input} onChange={handleInputChange} type="text" />
        <button className='bg-secondary text-accent border border-accent rounded-lg min-w-20' type='submit'>send</button>
      </form>
    </div>
  )
}

export default ChatWrapper
