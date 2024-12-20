import { useAuthContext } from "../contexts/AuthContext";

const UserProfile = () => {
  const { user } = useAuthContext();

  if (!user)
    return (
      <div className="w-full mx-auto bg-slate-50 p-8 rounded-lg shadow-md">
        <p className="text-center text-red-700">
          You have to login to see this page.
        </p>
      </div>
    );

  return (
    <div className="w-5/6 sm:w-1/2 mx-auto bg-slate-50 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4">
        Your Profile
      </h2>
      <div>
        <p className="font-bold">
          Username: <span className="text-gray-500">{user.username}</span>
        </p>
        <p className="font-bold">
          Email: <span className="text-gray-500">{user.email}</span>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
