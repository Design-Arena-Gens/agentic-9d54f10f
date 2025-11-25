import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'android-studio-cloud', timestamp: new Date().toISOString() });
}
