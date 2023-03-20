import { getProduct, getProducts } from '@/service/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

// SEO 작업 generateMetadata
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  return <h1>{product.name} 제품 설명 페이지!!</h1>;
}

// generateStaticParams = SSG 미리생성
export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => {
    slug: product.id;
  });
}
