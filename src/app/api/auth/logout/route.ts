import { NextResponse, NextRequest } from 'next/server';

interface Context {
  params: undefined;
}

const URL_BASE = "http://localhost:8000/api"


export async function POST(request: NextRequest, context: Context) {
  try {
    
      const response = await fetch(`${URL_BASE}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
      credentials: "include",
    });
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.error();
  }
}



