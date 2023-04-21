import { useState } from "react";
import ApprovalTable from "./ApprovalTable";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home Page", src: "home", path:"/" },
    { title: "Document Approval", src: "approve" },
    { title: "Analytics", src: "analytics" },
    { title: "Upload Document", src: "upload"},
    { title: "Logout", src: "exit"},
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-yellow-700 min-h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src="../../public/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          {/* <img
            src="/public/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          /> */}
          <h1
            className={`text-white origin-left font-bold text-2xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Admin Dashboard
          </h1>
        </div>
        <ul className="pt-6 sticky top-0">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2
              ${
                index === 0 && "bg-light-white"
              } `}
            >
             <a href={Menu.path}>
              <img src={`../../public/${Menu.src}.png`} className="w-10 "/>
              <span className={`${!open && "hidden"} origin-left duration-200 font-bold text-xl`}>
                {Menu.title}
              </span>
             </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="min-h-screen flex-1 p-7  bg-gray-200">
        <h1 className="text-2xl font-semibold ">Document Approval</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-items-center my-6">
            <div class="p-5 bg-white rounded-lg shadow-sm dark:bg-amber-800 w-48">
                <div class="text-base text-gray-400 dark:text-gray-300">Total Pending</div>
                <div class="flex items-center pt-1">
                    <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">3</div>
                </div>
            </div>

            <div class="p-5 bg-white rounded-lg shadow-sm dark:bg-amber-800 w-48">
                <div class="text-base text-gray-400 dark:text-gray-300">Trend Type</div>
                <div class="flex items-center pt-1">
                    <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">Annoucement</div>
                </div>
            </div>

            <div class="p-5 bg-white rounded-lg shadow-sm dark:bg-amber-800 w-48">
                <div class="text-base text-gray-400 dark:text-gray-300">Recent Uploaded</div>
                <div class="flex items-center pt-1">
                    <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">22/04/2023</div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1">
            <div>
            <ApprovalTable /> 
            </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;