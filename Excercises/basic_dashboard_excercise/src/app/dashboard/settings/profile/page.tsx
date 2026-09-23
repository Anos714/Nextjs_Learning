import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-screen min-h-screen bg-linear-to-br from-pink-100 via-purple-100 toto-blue-100 flex justify-center">
      <div className="w-3xl h-fit p-10 bg-white shadow-xl flex flex-col gap-5.5 mt-5 rounded-sm">
        <h1 className="text-2xl font-bold">Profile Settings</h1>
        {/* profile image section */}
        <section className="flex flex-col gap-10.5">
          <div className="flex flex-col gap-3.5">
            <p>Profile Picture</p>
            <Image
              src="https://images.unsplash.com/vector-1776244475768-9554c65cd5b5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile picture"
              height="100"
              width="100"
            ></Image>
            <button className="bg-blue-400 h-10 w-45 rounded-sm hover:bg-blue-500 transition-all text-white drop-shadow-xl">
              Change Picture
            </button>
          </div>
          <div className="flex flex-col gap-3.5">
            <p className="text-xl">Profile Information</p>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullName" className="text-sm text-gray-500">
                Full Name
              </label>
              <input
                id="fullName"
                defaultValue="John Doe"
                placeholder="Enter your full name"
                className="border border-gray-300 h-10 rounded-md pl-5"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="text-sm text-gray-500">
                Username
              </label>
              <input
                id="username"
                defaultValue="john_doe"
                placeholder="Enter your username"
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

            <div className="flex gap-2 justify-end-safe mt-5">
              <button className="bg-gray-200 h-10 w-30 rounded-sm hover:bg-gray-500/50 transition-all">
                Cancel
              </button>
              <button className="bg-blue-400 h-10 w-45 rounded-sm hover:bg-blue-500 transition-all">
                Save Changes
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
