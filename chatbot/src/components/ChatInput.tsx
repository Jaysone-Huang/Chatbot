"use client";
import { Button, Textarea } from '@nextui-org/react';
import { Send } from 'lucide-react';
import React from 'react';
import { type useChat } from 'ai/react';

type handleInputChange = ReturnType<typeof useChat>['handleInputChange'];
type handleSubmit = ReturnType<typeof useChat>['handleSubmit'];
type setInput = ReturnType<typeof useChat>['setInput'];


interface ChatInputProps {
  input: string,
  handleInputChange: handleInputChange,
  handlesubmit: handleSubmit,
  setInput:setInput,

}

const ChatInput = ({input, handleInputChange, handlesubmit, setInput}: ChatInputProps) => {
  return (
    <div className="z-10 bg-bk2 absolute bottom-0 left-0 w-full pt-6">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex flex-col w-full flex-grow p-4 bg-bk3 rounded-lg shadow-lg">
            <form onSubmit={handlesubmit} className="relative">
              <Textarea
                minRows={4}
                autoFocus
                placeholder="Talk to me..."
                className="resize-none bg-transparent rounded-lg text-base text-zinc-300 placeholder-zinc-500 border-b-2 border-b-border focus:outline-none focus:ring-2 focus:ring-accent"
                onChange={handleInputChange}
                value={input}
                onKeyDown={(e) => {
                  if (e.key == 'Enter' && !e.shiftKey){
                    e.preventDefault();
                    handlesubmit();
                    setInput('');
                  }
                }}
              />
              <Button
                size="sm"
                type="submit"
                className="absolute z-10 rounded-lg bg-bk2 right-2 bottom-2 hover:bg-white transition-all duration-200 ease-in-out p-2"
              >
                <Send className="hover:text-black text-white size-6"/>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default ChatInput
