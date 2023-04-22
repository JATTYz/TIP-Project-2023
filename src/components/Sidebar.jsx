import { useState } from "react";
import ApprovalTable from "./ApprovalTable";
import DoughnutChart from "./DoughnutChart";
import PolarChart from "./PolarChart";
import { Radar } from "react-chartjs-2";
import RadarChart from "./RadarChart";
import BubbleChart from "./BubbleChart";
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
        } bg-amber-800 min-h-screen p-5 pt-8 relative duration-300`}
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
        <h1 className="text-2xl font-extrabold ">Document Approval</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-items-center my-6">
            <div className="p-5 bg-white rounded-lg  dark:bg-amber-800 w-48  shadow-lg shadow-amber-950">
              <div className="flex">
                <img src="../../public/pending.png" className="w-14  h-12 mr-4" />
                <div className="text-xl dark:text-gray-300 font-extrabold">Total Pending</div>
              </div>
                <div className="items-center pt-1">
                    <div className="text-2xl font-bold  text-gray-100 pt-4">3</div>
                </div>
            </div>

            <div className="p-5 bg-white rounded-lg dark:bg-amber-800 w-48 shadow-lg shadow-amber-950">
              <div className="flex">
                <img src="../../public/trend.png" className="w-14 mr-4 h-12" />
                <div className="text-xl  text-gray-300 font-extrabold">Trend Type</div>
              </div>
                <div className="flex items-center pt-1">
                    <div className="text-2xl font-bold  text-gray-100 pt-4">Annoucement</div>
                </div>
            </div>

            <div className="p-5 bg-white rounded-lg dark:bg-amber-800 w-48 shadow-lg shadow-amber-950">
              <div className="flex">
                <img src="../../public/update.png" className="w-14 mr-4 h-12" />
                <div className="text-xl font-extrabold text-gray-300 ">Recent Uploaded</div>
              </div>
                <div className="flex items-center pt-1">
                    <div className="text-2xl font-bold  text-gray-100 pt-4">22/04/2023</div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1">
            <div>
            <ApprovalTable /> 
            </div>
        </div>
        <div className="mt-20">
          <h1 className="text-2xl font-extrabold">Analytics</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto mt-10">
          <div>
           <DoughnutChart />
            <h1 className="text-center font-bold text-lg mt-10">Document Type</h1>
          </div>
          <div>
            <RadarChart />
            <h1 className="text-center font-bold text-lg mt-10">Document Upload Trend</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 w-full h-auto mt-20">
          <div>
            <BubbleChart />
            <h1 className="text-center font-bold text-lg">TRAFFIC</h1>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-2xl font-bold">Manually Upload Document</h1>
          <div className="mt-3 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          {/* <div className="p-5 bg-white rounded-lg  dark:bg-amber-800 w-48  shadow-lg shadow-amber-950"> */}
              <div className="flex justify-center">
                <h1 className="text-xl dark:text-gray-300 font-extrabold">Click to upload</h1>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
export default Sidebar;