const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Finish project report",
      description:
        "Complete the final draft of the annual project report and send it to the manager.",
      status: "pending",
      dueDate: "2026-09-18",
    },
    {
      id: 2,
      title: "Fix responsive navbar bug",
      description:
        "Resolve the hamburger menu alignment issue on mobile screens in the dashboard UI.",
      status: "in-progress",
      dueDate: "2026-09-14",
    },
    {
      id: 3,
      title: "Review pull requests",
      description:
        "Check the authentication branch code submitted by the backend team.",
      status: "pending",
      dueDate: "2026-09-15",
    },
    {
      id: 4,
      title: "Buy weekly groceries",
      description:
        "Pick up milk, eggs, vegetables, and coffee from the supermarket.",
      status: "completed",
      dueDate: "2026-09-12",
    },
    {
      id: 5,
      title: "Setup MongoDB connection",
      description:
        "Configure Mongoose inside the Express server and test connection strings.",
      status: "completed",
      dueDate: "2026-09-10",
    },
    {
      id: 6,
      title: "Design landing page hero section",
      description:
        "Create a modern, dark-themed header block using Tailwind CSS and custom fonts.",
      status: "in-progress",
      dueDate: "2026-09-16",
    },
    {
      id: 7,
      title: "Gym session - Leg day",
      description:
        "Squats, lunges, and calf raises at the community fitness center.",
      status: "pending",
      dueDate: "2026-09-14",
    },
    {
      id: 8,
      title: "Write documentation for API",
      description:
        "Document all authentication and CRUD endpoints using Postman or Swagger.",
      status: "pending",
      dueDate: "2026-09-22",
    },
    {
      id: 9,
      title: "Call electricity provider",
      description:
        "Enquire about the incorrect billing amount displayed for last month.",
      status: "completed",
      dueDate: "2026-09-11",
    },
    {
      id: 10,
      title: "Deploy app to Vercel",
      description:
        "Connect the GitHub main branch to Vercel and check environmental variables.",
      status: "pending",
      dueDate: "2026-09-15",
    },
    {
      id: 11,
      title: "Test app on mobile",
      description: "Test the app on mobile devices to ensure compatibility.",
      status: "pending",
      dueDate: "2026-09-15",
    },
  ];

  return (
    <div className="h-full w-screen flex justify-center bg-linear-to-br from-blue-50 to-purple-50">
      <div className="flex flex-col h-fit bg-white p-5 mt-5 gap-2 w-5xl">
        <h1 className="text-3xl font-semibold">Tasks</h1>
        <section className="flex flex-col gap-3 w-full">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex justify-between items-center gap-3.5 w-full h-fit bg-white shadow-md p-5 rounded-2xl border-l-4 ${task.status === "pending" ? "border-l-red-500" : task.status === "in-progress" ? "border-l-yellow-300" : "border-l-green-500"}`}
            >
              <div>
                <h2 className="text-md font-semibold">{task.title}</h2>
                <p className="text-gray-500 text-shadow-mauve-200">
                  {task.description}
                </p>
                <p className="text-gray-500 text-sm">
                  Due Date: {task.dueDate}
                </p>
              </div>

              <div className={`rounded-full flex gap-3`}>
                <p
                  className={`text-gray-500 text-xs h-7 w-25 rounded-full flex justify-center items-center ${task.status === "pending" ? "bg-red-100 text-red-500" : task.status === "in-progress" ? "bg-yellow-100 text-yellow-300" : "bg-green-100 text-green-500"}`}
                >
                  {task.status.toUpperCase()}
                </p>

                {task.status !== "completed" && (
                  <button className="text-sm text-white cursor-pointer bg-green-500 h-7 w-40 rounded-sm hover:bg-green-600 transition-all">
                    Mark as Completed
                  </button>
                )}

                <button className="text-sm text-white cursor-pointer bg-blue-500 h-7 w-15 rounded-sm hover:bg-blue-600 transition-all">
                  Edit
                </button>
                <button className="text-sm text-white cursor-pointer bg-red-500 h-7 w-15 rounded-sm hover:bg-red-600 transition-all">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tasks;
