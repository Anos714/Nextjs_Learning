import Image from "next/image";

const UserDetails = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    status: "active",
    bio: "John is a passionate software engineer with over 8 years of experience in building scalable web applications. He loves working with modern JavaScript frameworks and mentoring junior developers.",
    profilePicture:
      "https://images.unsplash.com/vector-1776244475768-9554c65cd5b5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    activities: [
      { id: 1, description: "Updated password", timestamp: "2025-02-10" },
      {
        id: 2,
        description: "Logged in from a new device",
        timestamp: "2025-03-15",
      },
      {
        id: 3,
        description: "Updated profile picture",
        timestamp: "2025-04-02",
      },
      {
        id: 4,
        description: "Enabled two-factor authentication",
        timestamp: "2025-05-20",
      },
    ],
  };
  return (
    <div>
      <div className="w-screen min-h-screen bg-linear-to-br from-pink-100 via-purple-100 toto-blue-100 flex justify-center">
        <div className="w-3xl h-fit p-10 bg-white shadow-xl flex flex-col gap-5.5 mt-5 rounded-sm">
          {/* users description section*/}
          <section className="flex flex-col gap-10.5">
            <div className="flex items-center gap-2">
              <Image
                src={user.profilePicture}
                alt={user.name}
                width={100}
                height={100}
                className="rounded-full"
              ></Image>
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-bold">{user.name}</p>
                <p className="text-sm">{user.email}</p>
                <p className="text-sm">{user.role}</p>
                <p
                  className={`text-sm ${user.status === "active" ? "text-green-500" : "text-red-500"}`}
                >
                  {user.status}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3.5">
              <h2 className="text-lg font-semibold">About</h2>
              <p className="text-sm text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident omnis quisquam accusamus. Illum dicta vitae cum
                pariatur quos quibusdam consequatur?
              </p>
            </div>
          </section>
          {/* users activities section*/}
          <section className="flex flex-col gap-5.5">
            <h2 className="text-lg font-semibold">Recent Activities</h2>
            {user.activities && user.activities.length > 0 ? (
              <ul className="flex flex-col gap-3.5">
                {user.activities.map((activity, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-500 flex gap-3.5"
                  >
                    <div>
                      <p className="h-10 w-10 bg-blue-500 rounded-full text-white flex justify-center items-center font-bold">
                        J
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>{activity.description}</p>
                      <p>{activity.timestamp}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No activities yet.</p>
            )}
          </section>
          <div className="flex gap-2 justify-end-safe mt-5">
            <button className="bg-gray-200 h-10 w-30 rounded-sm hover:bg-gray-500/50 transition-all">
              Cancel
            </button>
            <button className="bg-blue-400 h-10 w-45 rounded-sm hover:bg-blue-500 transition-all">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
