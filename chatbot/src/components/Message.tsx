import React from 'react';
import { type Message as TMessages } from "ai/react";
import util from '@/lib/util';
import { User, Bot } from 'lucide-react';


interface MessagesProps {
  content: string,
  isUserMessage: boolean,
  time?: Date,
}

const Message = ({ content, isUserMessage, time }: MessagesProps) => {

  // console.log(time)
  return (
    <div
      // className={util({
      //   "bg-bk": isUserMessage,
      //   "bg-bk": !isUserMessage,
      // })}
      className='bg-bk'
    >
      <div className="bg-bk p-6">
        <div className="bg-bk max-w-3xl mx-auto flex items-start gap-2.5">
          <div
            className={util(
              "size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-black flex justify-center items-center",
              {
                "bg-[#9656ce]  border-[#5b209a] text-white": isUserMessage,
              }
            )}
          >
            {isUserMessage ? <User className="size-5" /> : <Bot className="size-5 text-white" />}
          </div>

          <div className="bg-bk flex flex-col ml-6 w-full">
            <div className=" bg-bk flex items-center space-x-2">
              <span className=" bg-bk text-sm font-semibold text-white">
                {isUserMessage ? "You" : "Rag Bot"}
              </span>
              <span className="bg-bk text-sm text-zinc-400">
                {(() => {
                  const date = new Date(time ?? Date.now());
                  const today = new Date();

                  // Check if the date is today
                  const isToday = 
                    date.getDate() === today.getDate() &&
                    date.getMonth() === today.getMonth() &&
                    date.getFullYear() === today.getFullYear();

                  // Format the time portion
                  const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                  return isToday ? `Today at ${timeString}` : `${date.toLocaleDateString()} at ${timeString}`;
                })()}
              </span>
            </div>

            <p className="bg-bk2 text-sm font-normal p-2.5 rounded-lg text-white">{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message;
