import "./dashboard.css";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state) => state.userInfo);
  return (
    <div>
      <Navigation />
      {/* TODO put a condition here also */}
      {user.name && <Menu />}
      <div className="dashboard-container">
        {user.name && <Outlet></Outlet>}
        {/* TODO may be it might be a good idea to keep track if someone is logged or not here and then not show if user is not logged in. */}
      </div>
    </div>
  );
}
