import Link from "next/link";

const Settings = () => {
  const links = [
    {
      id: 1,
      title: "Account",
      href: "/dashboard/settings/account",
    },
    {
      id: 2,
      title: "Notifications",
      href: "/dashboard/settings/notifications",
    },
    {
      id: 3,
      title: "Profile",
      href: "/dashboard/settings/profile",
    },
  ];

  return (
    <main className="h-screen w-screen bg-linear-to-br from=blue-50 via-indigo-100 to-purple-200 flex justify-center">
      <section className="mt-5 p-10 h-fit w-2xl lg:w-7xl md:w-5xl bg-white shadow-2xl flex flex-col gap-4.5">
        <div className="flex flex-col gap-4.5">
          <h1 className="text-2xl font-semibold">Settings</h1>
          <p>
            Customize youe account settings, Profile, and Notifications here.
            Choose an option from the sidebar to begin
          </p>
        </div>

        <section className="flex justify-between gap-3.5">
          <div className="flex flex-col gap-2.5 mt-5">
            <p className="text-2xl">Quick Links</p>
            <ul className="flex flex-col gap-5.5">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.id}
                  className="hover:bg-blue-200 hover:text-gray-500 h-10 w-65 flex items-center p-2 transition-all"
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="bg-white h-75 shadow-2xl flex flex-col gap-3.5 p-5 rounded-sm">
            <p className="text-2xl ">Select a Settings</p>
            <p className="text-gray-500">
              Choose an option from the sidebar to manage your account,
              notifications, or profile settings
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Settings;
