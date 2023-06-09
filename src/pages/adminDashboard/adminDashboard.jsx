import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import DashBoardContent from "./DashBoardContent";

import { FiSettings } from "react-icons/fi";
import SidebarItems from "./SidebarItems";
const adminDashboard = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              {" "}
              <FiSettings />
              Option
            </label>
            {/* Page content here */}
            <div className="w-full p-4">
              <DisplayCenter>
                <DashBoardContent />
              </DisplayCenter>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <SidebarItems />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default adminDashboard;
