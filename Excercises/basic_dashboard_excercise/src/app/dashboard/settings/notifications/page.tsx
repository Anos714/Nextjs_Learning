const Notifications = () => {
  return (
    <div className="w-screen h-screen bg-linear-to-br from-pink-100 via-purple-100 toto-blue-100 flex justify-center">
      <section className="w-3xl h-fit p-10 bg-white shadow-xl flex flex-col gap-5.5 mt-5 rounded-sm">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <section className="flex flex-col gap-3.5">
          <p className="text-xl">Notification Preferences</p>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email-notifications"
              className="text-sm text-gray-500"
            >
              Email Notifications
            </label>
            <select
              id="email-notifications"
              className="border border-gray-300 h-10 rounded-md pl-5"
            >
              <option value="enable">Enable</option>
              <option value="disable">Disable</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="sms-notifications"
              className="text-sm text-gray-500"
            >
              SMS Notifications
            </label>
            <select
              id="sms-notifications"
              className="border border-gray-300 h-10 rounded-md pl-5"
            >
              <option value="enable">Enable</option>
              <option value="disable">Disable</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="push-notifications"
              className="text-sm text-gray-500"
            >
              Push Notifications
            </label>
            <select
              id="push-notifications"
              className="border border-gray-300 h-10 rounded-md pl-5"
            >
              <option value="enable">Enable</option>
              <option value="disable">Disable</option>
            </select>
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
      </section>
    </div>
  );
};

export default Notifications;
