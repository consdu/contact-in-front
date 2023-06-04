import { Navigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute = ({
  children,
}: ProtectedRouteProps): React.ReactElement => {
  const { getLocalStorageItem } = useLocalStorage();
  const token = getLocalStorageItem("token");

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
