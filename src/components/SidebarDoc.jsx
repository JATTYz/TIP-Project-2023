import { useState } from "react";
import ApprovalTable from "./ApprovalTable";
import DoughnutChart from "./DoughnutChart";
import RadarChart from "./RadarChart";
import BubbleChart from "./BubbleChart";
import AllDocuments from "./AllDocuments";



const SidebarDoc = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home Page", src: "home", path:"/" },
    { title: "Admin Dashboard", src: "documentation", path:"/admin/approval" },
    { title: "Logout", src: "exit"},
  ];


  const test = () => {

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  }

  return (
    <div className="flex scroll-smooth">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#361500] min-h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src="../../public/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center relative">
          <img
            src="../../public/profile.jpg"
            className={`rounded-full cursor-pointer duration-500 ${
              open && "rotate-[360deg]" 
            } w-20`}
          />
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
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-6
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
        <h1 className="text-2xl font-bold " id="section-1">All Documents</h1>
        <AllDocuments />
      </div>
    </div>
  );
};
export default SidebarDoc;