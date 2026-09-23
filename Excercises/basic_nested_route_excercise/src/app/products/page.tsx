import Link from "next/link";

const pages = [
  {
    id: 1,
    href: "/products/all-products",
    title: "All Products",
    description:
      "Browse the complete catalog of products available in our store, from everyday essentials to premium picks.",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    href: "/products/specific-product",
    title: "Specific Product",
    description:
      "Take a closer look at a single, hand-picked product with detailed specs, pricing, and availability.",
    bgColor: "bg-green-100",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-blue-100 via-purple-100 to-pink-100 flex justify-center">
      <div className="w-4xl bg-white h-fit mt-10 p-10 flex flex-col gap-5.5">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pages.map((page) => (
            <Link
              key={page.id}
              href={page.href}
              className={`flex flex-col gap-2 ${page.bgColor} p-5 shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              <h2 className="text-xl font-bold">{page.title}</h2>
              <p>{page.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
