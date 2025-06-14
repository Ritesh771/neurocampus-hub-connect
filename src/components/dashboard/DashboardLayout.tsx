import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export const DashboardLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Outlet />
    </div>
  );
}; 