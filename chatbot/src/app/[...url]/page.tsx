import { ragChat } from '@/lib/rag-chat'
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
  const reconstUrl = reconstructUrl({url: params.url as string[]})
  console.log(params)
  await ragChat.context.add({
    type: "html",
    source: reconstUrl,
    config: { chunkOverlap: 50, chunkSize: 200},
  });
  return (
    <div className='bg-primary text-accent'>
    </div>
  )
}

export default page;
