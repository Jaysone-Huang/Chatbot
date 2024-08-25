"use client";
import React from 'react'
import { useChat } from 'ai/react'
import { Input } from 'postcss';

const ChatWrapper = ({sessionId}:{sessionId:string}) => {
  const { messages, handleInputChange, input } = useChat({
    api: '/api/chat-stream',
    body: {sessionId},
  });
  return (
    <div className='relative min-h-full bg-primary flex divide-y divide-secondary flex-col justify-between gap-2'>
      <div className='flex-1 text-white bg-primary justify-between flex flex-col'>
        {JSON.stringify(messages)}
      </div>
      <input value={input} onChange={handleInputChange} type="text" />
    </div>
  )
}

export default ChatWrapper
