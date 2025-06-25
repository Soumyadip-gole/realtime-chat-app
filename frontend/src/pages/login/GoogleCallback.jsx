import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const GoogleCallback = () => {
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();

  useEffect(() => {
    // Fetch user info from backend (cookie should be set by backend)
    fetch("/api/auth/me", { credentials: "include" })
      .then(async (res) => {
        if (!res.ok) throw new Error("Not authenticated");
        const data = await res.json();
        setAuthUser(data); // Update context/state
        navigate("/", { replace: true });
      })
      .catch(() => {
        navigate("/login", { replace: true });
      });
  }, [navigate, setAuthUser]);

  return <div className="flex items-center justify-center h-screen text-xl">Logging you in with Google...</div>;
};

export default GoogleCallback;

