import { useUser } from "reactfire";
import { Outlet, Navigate } from "react-router-dom";

export function PrivateRoute() {
  const { data: user } = useUser();

  return user ? <Outlet /> : <Navigate to="/signin" />;
}
