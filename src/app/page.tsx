import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import os from 'os'; // 노드 API , 서버 컴포넌트에서는 웹 API 사용불가
import Counter from '@/components/Counter';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log("안녕 - 서버");
  
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지</h1>
      <Counter />
    </>
  );
}
