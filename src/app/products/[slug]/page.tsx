import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: {
    slug: string;
  };
}

// SEO 작업 generateMetadata
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
}

export default function page({ params }: Props) {
  if (params.slug === 'nothing') {
    notFound();
  }

  return (
    <>
      <div>{params.slug} 제품 설명 페이지!!</div>
    </>
  );
}

// generateStaticParams = SSG 미리생성
export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((products) => {
    slug: products;
  });
}
