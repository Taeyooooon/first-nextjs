import Image from 'next/image';
import styles from './page.module.css';
import os from 'os'; // 노드 API , 서버 컴포넌트에서는 웹 API 사용불가
import Counter from '@/components/Counter';


export default function Home() {
  console.log('안녕 - 서버');

  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지임!!</h1>
      <Counter />
      {/* 이미지 외부 링크 사용할 때 width, height 그리고 next.config.js 파일 수정 필요 */}
      <Image src='https://images.unsplash.com/photo-1441986300917-64674bd600d8' alt='shop' width={400} height={400} />
    </>
  );
}
