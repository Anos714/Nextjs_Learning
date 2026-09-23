import Link from "next/link";

const Users = () => {
  const usersLinks = [
    {
      href: "/dashboard/users/users-details",
      title: "Users details",
      description: "View detailed information about each user in your system",
      bgColor: "bg-green-50",
    },
    {
      href: "/dashboard/users/users-list",
      title: "Users list",
      description: "Browse and manage all users in the system",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-linear-to-br from-pink-100 via-purple-100 toto-blue-100 flex justify-center">
      <div className="w-3xl h-fit p-10 bg-white shadow-xl flex flex-col gap-5.5 mt-5 rounded-sm">
        <h1 className="text-2xl fonr-bold">Users</h1>
        <p className="text-gray-500 text-sm">
          Manage your users here. You can view detailed information or browse a
          list of users
        </p>
        <section className="flex gap-3.5">
          {usersLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${link.bgColor} p-5 rounded-lg flex flex-col gap-2 shadow-xl`}
            >
              <p className="text-xl">{link.title}</p>
              <p className="text-sm text-gray-500">{link.description}</p>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Users;
