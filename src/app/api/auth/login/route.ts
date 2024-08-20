import { NextResponse, NextRequest } from 'next/server';

interface Context {
  params: undefined;
}

const URL_BASE = "http://localhost:8000/api"


export async function POST(request: NextRequest, context: Context) {
  try {
    const url = new URL(request.url);
    const email = url.searchParams.get('email')
    const password = url.searchParams.get('password')
    
      const response = await fetch(`${URL_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.error();
  }
}



