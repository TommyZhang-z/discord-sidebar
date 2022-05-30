import { Link } from "react-router-dom";
import { AiFillProject, AiOutlinePlus } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import useTheme from "../hooks/useTheme";

type sideBarProps = {
  path: String;
};

type iconProps = {
  icon: JSX.Element;
  text?: String;
  selected?: boolean;
  last?: boolean;
};

const SideBar = ({ path }: sideBarProps) => {
  const [theme, handleChangeTheme] = useTheme();
  return (
    <div className="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col justify-between bg-gray-50 text-black dark:bg-gray-900 dark:text-white shadow-lg py-5">
      {/* TOP GROUP */}
      <div className="flex flex-col">
        <Link to="/">
          <SideBarIcon
            icon={<AiFillProject size="28" />}
            text="PROJECTS 📁"
            selected={path === "/"}
          />
        </Link>
        <Link to="/create">
          <SideBarIcon
            icon={<AiOutlinePlus size="28" />}
            text="CREATE 🆕"
            selected={path === "/create"}
          />
        </Link>
        <Separator />
      </div>

      {/* BOTTOM Group */}
      <div className="flex flex-col">
        <Link to="/users">
          <SideBarIcon
            icon={<FaUserCircle size="28" />}
            text="USERS 🦜"
            selected={path === "/users"}
          />
        </Link>
        <div onClick={handleChangeTheme}>
          <SideBarIcon
            {...(theme === "dark"
              ? { icon: <IoSunnySharp size="28" />, text: "LIGHT MODE 💡" }
              : { icon: <IoMoonSharp size="28" />, text: "DARK MODE 💡" })}
          />
        </div>
      </div>
    </div>
  );
};

const SideBarIcon = ({
  icon,
  selected = false,
  text = "tooltip 💡",
}: iconProps) => (
  <div className={`relative`}>
    <div
      className={`sidebar-icon group ${
        selected &&
        "rounded-xl bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white dark:from-blue-400 dark:to-indigo-600 dark:text-white"
      }`}
    >
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
    <div
      className={`absolute hovering dark:bg-gray-300 bg-[#ff7e5f]  w-1 rounded-r-full my-auto top-0 bottom-0 ${
        selected ? "h-2/3" : "h-1/3 hidden"
      }`}
    ></div>
  </div>
);

const Separator = () => <div className="separator"></div>;

export default SideBar;
