import { ClipboardList, BarChart, Settings, Users2 } from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  const cards = [
    {
      id: 1,
      title: "Tasks",
      description: "Manage your tasks and to-dos",
      icon: <ClipboardList />,
      href: "/dashboard/tasks",
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      title: "Analytics",
      description: "View your analytics and insights",
      icon: <BarChart />,
      href: "/dashboard/analytics",
      bgColor: "bg-green-100",
    },
    {
      id: 3,
      title: "Settings",
      description: "Customize and tweak your settings",
      icon: <Settings />,
      href: "/dashboard/settings",
      bgColor: "bg-purple-100",
    },
    {
      id: 4,
      title: "Users",
      description: "Manage your users and their permissions",
      icon: <Users2 />,
      href: "/dashboard/users",
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <section className="h-screen w-full gap-5.5 flex justify-center bg-linear-to-br from-blue-100 to-purple-100">
      <div className="mt-10 h-fit w-200 p-5 flex flex-col gap-3.5 bg-white rounded-3xl shadow-gray-300">
        <div>
          <h1 className="font-bold text-3xl">Dashboard</h1>
          <p className="text-gray-500">
            Welcome back! Here you can manage your tasks, view analytics, and
            make adjustments
          </p>
        </div>

        {/*card grids*/}
        <div className="grid grid-cols-3 gap-5">
          {cards.map((card) => (
            <Link key={card.id} href={card.href}>
              <div
                className={`${card.bgColor} rounded-3xl shadow-gray-300 p-5 flex flex-col gap-3`}
              >
                <div className="flex justify-between">
                  <p className=" text-gray-500 font-semibold">{card.title}</p>
                  <p className=" text-gray-500">{card.icon}</p>
                </div>

                <p className=" text-gray-500">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
