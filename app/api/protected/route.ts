import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized', message: 'Valid session required' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    message: 'Authenticated session verified',
    user: session.user,
  });
}
