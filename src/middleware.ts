import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행되고 있음!');
  console.log('REQUEST : ', request);

  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 - 경로를 리다이렉팅함!');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

// 아래 경로에 해당할 경우에만 미들웨어 실행
export const config = {
  matcher: ['/products/:path*'],
};
