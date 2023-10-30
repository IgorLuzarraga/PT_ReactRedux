import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { selectUserAuth } from "../../features/user/userSlice";
import { useAppSelector } from "../../app/hooks";

interface ProtectedProps {
  children: ReactNode;
}

// HOC that checks if the the user is authorized, if not --> redirects to /login
const WithAuthProtection = ({ children }: ProtectedProps) => {
  const userAuth = useAppSelector(selectUserAuth);

  if (userAuth.kind === "NotAuthorized") {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default WithAuthProtection;
