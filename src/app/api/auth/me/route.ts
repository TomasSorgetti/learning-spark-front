import { NextResponse, NextRequest } from 'next/server';

interface Context {
  params: undefined;
}

const URL_BASE = "http://localhost:8000/api"


//* API Next.js
export async function GET(request: NextRequest, context: Context) {
    try { 
    
      const response = await fetch(`${URL_BASE}/users/me`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",          
        },
      });
      const data = await response.json();
      
    console.log(data);
    
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.error();
  }
}



