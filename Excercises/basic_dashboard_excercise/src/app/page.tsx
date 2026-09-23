import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen w-full flex flex-col gap-5.5 justify-center items-center bg-linear-to-br from-blue-100 to-purple-100">
      <div className="text-5xl font-semibold">Welcome to the Dashboard App</div>
      <p className="text-lg text-gray-500">
        Manage your tasks, tarck analytics and stay organized with our powerful
        dashboard
      </p>
      <Link
        href="/dashboard"
        className="bg-blue-500 p-2 w-50 text-center rounded-4xl text-white font-semibold hover:bg-blue-600 transition-all"
      >
        Go To Dashboard
      </Link>
    </section>
  );
}
