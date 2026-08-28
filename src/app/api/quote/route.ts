import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Google Apps Script Web App URL from environment variables
    const scriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      console.error('Missing NEXT_PUBLIC_APPS_SCRIPT_URL');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Forward the request to Google Apps Script
    // We send it as standard JSON. The Next.js server-side fetch will automatically follow 
    // the 302 redirects that Google Apps Script uses internally.
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // Spoofing a standard browser user agent sometimes helps with strict Google anti-bot walls
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      body: JSON.stringify(body),
      redirect: 'follow',
    });

    if (!response.ok) {
      console.error('Google Apps Script returned an error:', response.status, response.statusText);
      const text = await response.text();
      console.error('Response body:', text);
      return NextResponse.json(
        { error: 'Failed to forward to Google Apps Script', status: response.status },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error in proxy route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
