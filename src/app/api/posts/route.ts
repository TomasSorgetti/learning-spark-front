import { NextResponse, NextRequest } from 'next/server';

interface Context {
  params: undefined;
}

const URL_BASE = "http://localhost:8000/api"


export async function GET(request: NextRequest, context: Context) {
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get('page')
    const limit = url.searchParams.get('limit')
    
    const response = await fetch(`${URL_BASE}/blog?page=${page}&limit=${limit}`);
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.error();
  }
}



