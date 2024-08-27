import React from 'react';
import { type Message as TMessages } from "ai/react";
import Message from './Message';
import { MessageSquare } from 'lucide-react'

interface MessagesProps {
    messages: TMessages[],
}

const Messages = ({ messages }: MessagesProps) => {
    console.log(messages);
    return (
      <div className='bg-bk flex max-h-[calc(100vh-10.5rem)] flex-1 flex-col overflow-y-auto'>
        {messages.length ? (
          messages.map((message, index) => (
            <Message
              key={index}
              content={message.content}
              isUserMessage={message.role === "user"}
              time={message.createdAt}
            />
          ))
        ) : (
          <div className='bg-bk flex-1 flex flex-col items-center justify-center gap-2 py-3'>
            <MessageSquare className='size-8 text-[#7289da]'/>
            <h3 className='font-semibold text-xl text-white'>Ready?</h3>
            <p className='text-white text-sm'> Ask your question!</p>
          </div>
        )}
      </div>
    );
  };

export default Messages;
