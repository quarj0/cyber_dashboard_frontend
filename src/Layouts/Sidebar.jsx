/* eslint-disable react/prop-types */
import {
  HiOutlineClipboardList,
  HiOutlineShieldCheck,
  HiOutlineDocumentReport,
  HiOutlineCog,
  HiOutlineHome,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = ({ onSectionSelect }) => {
  const handleSectionClick = (section) => {
    onSectionSelect(section);
  };

  return (
    <div className="sidebar bg-gray-800 text-white h-screen flex flex-col justify-between">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Cybersecurity Dashboard</h1>
        <ul className="space-y-4">
          <li
            className="py-2 hover:bg-gray-700 cursor-pointer transition duration-300"
            onClick={() => handleSectionClick("overview")}
          >
            <Link to="/dashboard" className="flex items-center">
              <span className="mr-3">
                <HiOutlineHome className="h-5 w-5" />
              </span>
              Overview
            </Link>
          </li>

          <li
            className="py-2 hover:bg-gray-700 cursor-pointer transition duration-300"
            onClick={() => handleSectionClick("incidents")}
          >
            <Link to="/incidents" className="flex items-center">
              <span className="mr-3">
                <HiOutlineClipboardList className="h-5 w-5" />
              </span>
              Incidents
            </Link>
          </li>

          <li
            className="py-2 hover:bg-gray-700 cursor-pointer transition duration-300"
            onClick={() => handleSectionClick("threats")}
          >
            <Link to="/threats"  className="flex items-center">
              <span className="mr-3">
                <HiOutlineShieldCheck className="h-5 w-5" />
              </span>
              Threats
            </Link>
          </li>
          <li
            className="py-2 hover:bg-gray-700 cursor-pointer transition duration-300"
            onClick={() => handleSectionClick("reports")}
          >
            <Link to="/reports" className="flex items-center">
              <span className="mr-3">
                <HiOutlineDocumentReport className="h-5 w-5" />
              </span>
              Reports
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <Link to="/settings"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <HiOutlineCog className="h-5 w-5 mr-3" />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
