const Analytics = () => {
  const metrics = [
    {
      title: "Total Sales",
      value: "$10,000",
      change: "+12%",
      isPositive: true,
    },
    {
      title: "Active Users",
      value: "1,000",
      change: "+10%",
      isPositive: true,
    },
    {
      title: "Website Visits",
      value: "$8,000",
      change: "-20%",
      isPositive: false,
    },
    {
      title: "New Sign-ups",
      value: "500",
      change: "+50%",
      isPositive: true,
    },
  ];
  const recentActivity = [
    {
      title: "User Registration",
      description: "New user signes up on 2026-02-16",
      summary: "+10 Users",
    },
    {
      title: "User Login",
      description: "User logged in on 2026-02-16",
      summary: "+115 User",
    },
    {
      title: "Website Visit",
      description: "User visited the website on 2026-02-16",
      summary: "+200 Visit",
    },
    {
      title: "Website Revenue",
      description: "Total revenue generated from website visits",
      summary: "+$8,000",
    },
  ];
  return (
    <div className="bg-linear-to-br from-gray-100 to-blue-100 w-screnn h-fit flex justify-center items-center">
      <div className="mt-5 w-5xl h-full bg-white flex flex-col p-5 shadow-xl gap-3.5">
        <h1 className="text-2xl font-semibold">Analytics Dashboard</h1>
        {/*grid of metrics*/}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex justify-between items-center  bg-white shadow-sm p-5 rounded-xl border-l-4 ${metric.isPositive ? "border-green-500" : "border-red-500"}`}
            >
              <div>
                <p>{metric.title}</p>
                <p>{metric.value}</p>
              </div>

              <div>
                <p
                  className={`${metric.isPositive ? "text-green-500" : "text-red-500"}`}
                >
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/*graph/charts section*/}
        <section className="flex flex-col gap-3.5">
          <div>
            <p className="mb-2">Website Traffic</p>
            <div className="h-75 w-full bg-gray-300">Chart Placeholder</div>
          </div>
          <div>
            <p className="mb-2">Website Revenue</p>
            <div className="h-75 w-full bg-gray-300">Chart Placeholder</div>
          </div>
        </section>

        {/*recent activity section*/}
        <section>
          <p className="mb-2">Recent Activities</p>
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white shadow-md rounded-xl p-3 mb-5"
            >
              <div>
                <p>{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
              </div>
              <div>
                <p className="text-gray-500">{activity.summary}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Analytics;
