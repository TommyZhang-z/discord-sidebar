import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import useTheme from "../hooks/useTheme";

const Layout = (props: any) => {
  const authPath = ["/", "/create", "/users"];
  const path = useLocation().pathname;

  // AUTHENTICATED PAGES //////////////////////////////////////////////////////
  if (authPath.includes(path))
    return (
      <div className="flex">
        <SideBar {...{ path}} />
        <div className="main dark">{props.children}</div>
      </div>
    );

  // GUEST PAGES //////////////////////////////////////////////////////////////
  return <>{props.children}</>;
};

export default Layout;
