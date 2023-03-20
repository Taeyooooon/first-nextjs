import { getProducts } from '@/service/products';
import { NextResponse } from 'next/server';

// 최신 방식의 app폴더 내에서 라우트 핸들링
export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}
