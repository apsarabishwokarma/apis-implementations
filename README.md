This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

`container mx-auto px-6`

## Code Snippets

```tsx
// product-grid.tsx => get all products
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductGrid = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // function getData() {
    //   fetch("https://fakestoreapi.com/products")
    //     .then((res) => res.json())
    //     .then((json) => {
    //       setData(json);
    //       setIsLoading(false);
    //     }).catch((e)=>{});
    //   console.log("run");
    // }
    // alternative code

    async function getData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <>
      <div className="bg-white text-black container mx-auto px-6">
        <div className=" flex flex-col  gap-4 py-20 justify-center items-center text-center">
          <p className="font-medium text-base">Featured Products</p>
          <h1 className="font-bold text-3xl">BEST SELLER PRODUCTS</h1>
          <p className="font-medium text-lg">
            Discover, click, and shop, Just a click away from your next
            purchase.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            <div>Loading....</div>
          ) : (
            data.map(({ id, title, image, price, rating }) => (
              <Link
                href={`/product/${id}`}
                key={id}
                className="bg-white p-4 rounded-md border hover:shadow-md block"
              >
                <div className="cursor-pointer">
                  <figure className="aspect-square">
                    <Image
                      src={image}
                      alt={title}
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </figure>
                  <div className="m-3 text-gray-600">{title}</div>
                  <div className="text-gray-600">${price}</div>
                  <div className="text-gray-600">
                    {rating.rate}{" "}
                    <FaStar className="fill-yellow-400 inline mr-2" /> by{" "}
                    {rating.count} users
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
```

```tsx
// product-by-category.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type ProductCategoryProps = {
  productCategory: string;
};

export default function ProductCategory({
  productCategory,
}: ProductCategoryProps) {
  const [category, setCategory] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCategory() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${productCategory.replaceAll(
            "-",
            " "
          )}`
        );
        const json = await res.json();
        setCategory(json);
      } catch (e) {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }
    getCategory();
  }, [productCategory]);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.map(({ id, title, image, price, rating }) => (
          <div className="cursor-pointer">
            <figure className="aspect-square">
              <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </figure>
            <div className="m-3 text-gray-600">{title}</div>
            <div className="text-gray-600">${price}</div>
            <div className="text-gray-600">
              {rating.rate} <FaStar className="fill-yellow-400 inline mr-2" />{" "}
              by {rating.count} users
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```
