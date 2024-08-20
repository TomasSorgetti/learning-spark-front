import { NextResponse, NextRequest } from 'next/server';

interface Context {
  params: undefined;
}

const URL_BASE = "http://localhost:8000/api"


export async function GET(request: NextRequest, context: Context) {
  try {
    const url = new URL(request.url);
    const postUrl = url.searchParams.get('postUrl')
    
    const response = await fetch(`${URL_BASE}/blog/post/${postUrl}`);
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.error();
  }
}



