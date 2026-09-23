import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center gap-3.5">
      <h1 className="text-4xl font-bold">Welcome to Home Page</h1>
      <Link
        href="/products"
        className="bg-blue-400 text-white p-2 w-50 rounded-full text-center shadow-2xl hover:bg-blue-500 transition-all"
      >
        Go to Products
      </Link>
    </div>
  );
}
