import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(null, {
    status: 410,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}

