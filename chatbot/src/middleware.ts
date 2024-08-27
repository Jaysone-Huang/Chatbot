import { NextRequest, NextResponse } from 'next/server';
import React from 'react'

const middleware = (req: NextRequest) => {
  const res = NextResponse.next();
  const cookie =req.cookies.get('sessionid');
  if (!cookie){
    res.cookies.set('sessionId', crypto.randomUUID());
  }
  return res
};

export default middleware
