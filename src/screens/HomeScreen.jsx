import { useAuth } from "contexts/AuthContext";

const HomeScreen = () => {
  const { user } = useAuth();


  return (
    <div className="flex flex-col items-center justify-end w-full h-full">
      <div className="text-primary text-2xl font-bold">
        Hi {user.name.slice(0, 1).toUpperCase() + user.name.slice(1)}!
      </div>
    </div>
  )
};

export default HomeScreen;
