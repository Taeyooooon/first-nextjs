import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Link from 'next/link';
import styles from './page.module.css';

// ISR : 3초마다 revalidate
// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 3 }, // fetch 두번째 인자로 revalidate 지정가능, 0을 쓰면 SSR로 작동
    // cache: 'no-store', // no-store을 작성해도 SSR로 작동
  });
  const data = await res.json();
  const factText = data.data[0];
  return (
    <>
      <h1>제품 소개 페이지!!</h1>
      <ul>
        {products.map(({ id, name }, index) => {
          return (
            <li key={index}>
              <Link href={`/products/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
      {/* <article className={styles.article}>{factText}</article> */}
      <MeowArticle /> {/* CSR 방식으로 랜더링 */}
    </>
  );
}
