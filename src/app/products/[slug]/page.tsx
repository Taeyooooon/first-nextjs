import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: {
    slug: string;
  };
}

const page = ({ params }: Props) => {
  if (params.slug === 'nothing') {
    notFound();
  }
  return <div>{params.slug} Page!!</div>;
};

export default page;

// generateStaticParams = SSG 미리생성
export const generateStaticParams = () => {
  const products = ['pants', 'skirt'];
  return products.map((products) => {
    slug: products;
  });
};
