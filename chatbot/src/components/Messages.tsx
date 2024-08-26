import React from 'react';
import { type Message as TMessages } from "ai/react";
import Message from './Message';

interface MessagesProps {
    messages: TMessages[],
}

const Messages = ({ messages }: MessagesProps) => {
    return (
      <div className='flex max-h-[calc(100vh-10.5rem)] flex-1 flex-col overflow-y-auto'>
        {messages ? (
          messages.map((message, index) => (
            <Message
              key={index}
              content={message.content}
              isUserMessage={message.role === "user"}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
    );
  };

export default Messages;
