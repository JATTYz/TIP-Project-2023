import { useEffect, useState } from "react";
import ApprovalTable from "./ApprovalTable";
import DoughnutChart from "./DoughnutChart";
import RadarChart from "./RadarChart";
import { handleLogout } from "./logout";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(false);
  const [check, setCheck] = useState(true);
  const [loading, setLoading] = useState(true);
  // const [alert, setAlert] = useState(false);
  const Menus = [
    { title: "Home Page", src: "home", path:"/" },
    { title: "Document Approval", src: "documentation", path:"#section-1" },
    { title: "Analytics", src: "analytics" , path: "#section-2"},
    { title: "Upload Document", src: "upload", path:"/upload"},
    { title: "All Documents", src: "folders", path:"/admin/documents"},

  ];
  

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
              if (user != null) {
                setUser(true)
              }
    });
    
  },[])

  return  user ? ( <div 
      className={`flex scroll-smooth`}
    >
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
            src="../../public/man.png"
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

            <li
              key={Menus.length + 1}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-6 `}
            >
             <a onClick={() => handleLogout()}>
              <img src={`../../public/exit.png`} className="w-10 "/>
              <span className={`${!open && "hidden"} origin-left duration-200 font-bold text-xl`}>
                Logout
              </span>
             </a>
            </li>

        </ul>
      </div>
      <div className="min-h-screen flex-1 p-7  bg-white">
        <h1 className="text-2xl font-extrabold " id="section-1">Document Approval</h1>

        <div className="grid grid-cols-1">
            <ApprovalTable key="HSBC"/> 
        </div>
        <div className="mt-20">
          <h1 className="text-2xl font-extrabold" id="section-2">Analytics</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto mt-10">
          <div>
           <DoughnutChart />
            <h1 className="text-center font-bold text-lg mt-10">Overall Document Type</h1>
          </div>
          <div>
            <RadarChart />
            <h1 className="text-center font-bold text-lg mt-10">Uploaded document trend this month</h1>
          </div>
        </div>
      </div>
    </div>

  ) :  
      <Dialog
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Unable to access admin page"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This is for admin access, please log in 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> window.location.replace("/login")}>GO TO LOGIN</Button>
        </DialogActions>
      </Dialog>
  
};
export default Sidebar;