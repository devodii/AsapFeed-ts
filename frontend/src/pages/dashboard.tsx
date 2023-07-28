import axios from "axios";

const Dashboard = () => {
  const handleLogout = () => axios.post("/api/auth/signout");
  return (
    <div className="h-full flex flex-col gap-4 justify-center items-center">
      <div>Dashboard</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
