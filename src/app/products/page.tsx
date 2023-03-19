import Link from 'next/link';

const products = ['shirt', 'pants', 'skirt'];

const ProductPage = () => {
  return (
    <div>
      Products page!!
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <Link href={`/products/${product}`}>{product}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductPage;
