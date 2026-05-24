"use client";

import Link from "next/link";

const page = () => {
  const products = [
    { id: 1, name: "Phone", price: 20000 },
    { id: 2, name: "watch", price: 1000 },
    { id: 3, name: "Laptop", price: 200000 },
    { id: 4, name: "monitor", price: 25000 },
  ];
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <Link href={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};
export default page;
