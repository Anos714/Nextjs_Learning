const UsersList = () => {
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "admin",
      status: "active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "editor",
      status: "active",
    },
    {
      id: "3",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "viewer",
      status: "inactive",
    },
    {
      id: "4",
      name: "Bob Brown",
      email: "bob.brown@example.com",
      role: "editor",
      status: "active",
    },
    {
      id: "5",
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      role: "viewer",
      status: "pending",
    },
    {
      id: "6",
      name: "Diana Evans",
      email: "diana.evans@example.com",
      role: "admin",
      status: "active",
    },
    {
      id: "7",
      name: "Evan Foster",
      email: "evan.foster@example.com",
      role: "viewer",
      status: "inactive",
    },
    {
      id: "8",
      name: "Fiona Green",
      email: "fiona.green@example.com",
      role: "editor",
      status: "active",
    },
    {
      id: "9",
      name: "George Harris",
      email: "george.harris@example.com",
      role: "viewer",
      status: "pending",
    },
    {
      id: "10",
      name: "Hannah Iris",
      email: "hannah.iris@example.com",
      role: "editor",
      status: "active",
    },
    {
      id: "11",
      name: "Ian Jackson",
      email: "ian.jackson@example.com",
      role: "admin",
      status: "inactive",
    },
    {
      id: "12",
      name: "Julia King",
      email: "julia.king@example.com",
      role: "viewer",
      status: "active",
    },
  ];
  return (
    <div className="w-screen min-h-screen bg-linear-to-br from-pink-100 via-purple-100 toto-blue-100 flex justify-center">
      <div className="w-3xl h-fit p-10 bg-white shadow-xl flex flex-col gap-5.5 mt-5 rounded-sm">
        <h1 className="text-2xl font-bold">Users List</h1>

        {/* users table*/}
        <div className="shadow-lg rounded-lg overflow-x-auto bg-white">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-400 text-white">
              <tr className="">
                <th className="px-4 py-3 text-center">Name</th>
                <th className="px-4 py-3 text-center">Email</th>
                <th className="px-4 py-3 text-center">Role</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-300">
                  <td className="px-4 py-3 text-center">{user.name}</td>
                  <td className="px-4 py-3 text-center">{user.email}</td>
                  <td className="px-4 py-3 text-center">{user.role}</td>
                  <td
                    className={`px-4 py-3 text-center ${user.status === "active" ? "text-green-500" : user.status === "inactive" ? "text-yellow-500" : "text-red-500"}`}
                  >
                    {user.status}
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <button className="px-2 py-1 bg-gray-400 text-white rounded-sm hover:bg-gray-500 transition-all">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-blue-500 text-white rounded-sm hover:bg-blue-600 transition-all">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
