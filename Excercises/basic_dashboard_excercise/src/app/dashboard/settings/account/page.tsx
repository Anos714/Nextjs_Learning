const Account = () => {
  return (
    <div className="w-screen h-screen bg-linear-to-br from-pink-100 via-purple-100 toto-blue-100 flex justify-center">
      <div className="w-3xl h-fit p-10 bg-white shadow-xl flex flex-col gap-5.5 mt-5 rounded-sm">
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <section className="flex flex-col gap-6.5">
          <div className="flex flex-col gap-3.5">
            <p className="text-xl">Profile Information</p>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm text-gray-500">
                Name
              </label>
              <input
                id="name"
                defaultValue="John Doe"
                placeholder="Enter your name"
                className="border border-gray-300 h-10 rounded-md pl-5"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm text-gray-500">
                Email
              </label>
              <input
                id="email"
                defaultValue="john.doe@gmail.com"
                placeholder="Enter your email"
                className="border border-gray-300 h-10 rounded-md pl-5"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            <p className="text-xl">Security</p>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm text-gray-500">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter new password"
                className="border border-gray-300 h-10 rounded-md pl-5"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="confirm-password"
                className="text-sm text-gray-500"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                className="border border-gray-300 h-10 rounded-md pl-5"
              />
            </div>
          </div>

          <div className="flex gap-2 justify-end-safe mt-5">
            <button className="bg-gray-200 h-10 w-30 rounded-sm hover:bg-gray-500/50 transition-all">
              Cancel
            </button>
            <button className="bg-blue-400 h-10 w-45 rounded-sm hover:bg-blue-500 transition-all">
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Account;
