import ChatWrapper from '@/components/ChatWrapper';
import { ragChat } from '@/lib/rag-chat'
import { redis } from '@/lib/redis';
import { cookies } from 'next/headers';
import React from 'react'


interface PageProps {
  params: {
    url: string | string[] | undefined

  }
}

const reconstructUrl = ({url}:{ url:string[] }) => {
  // dcecode url first
  return url.map((component) => decodeURIComponent(component)).join('/');

};

const page = async ({ params }: PageProps) => {
  const sessionCookie = cookies().get('sessionId')?.value;
  const reconstUrl = reconstructUrl({url: params.url as string[]})

  const sessionId = (reconstUrl + '--' + sessionCookie).replace(/\//g, '');

  const condition = await redis.sismember("indexed-urls", reconstUrl)
  console.log(condition);

  // const sessionId = 'mock-session';
  const initMessages = await ragChat.history.getMessages({amount:10, sessionId})

  if (!condition) {
    await ragChat.context.add({
      type: "html",
      source: reconstUrl,
      config: { chunkOverlap: 50, chunkSize: 200},
    });
    await redis.sadd("indexed-urls", reconstUrl);
  }
return <ChatWrapper sessionId={sessionId} initialMessages={initMessages}/>
}

export default page;
