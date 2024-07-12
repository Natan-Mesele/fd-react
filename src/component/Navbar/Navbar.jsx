import { Avatar, Badge, Box, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { pink } from "@mui/material/colors";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const {auth} = useSelector(store=>store)
  const navigate = useNavigate();

  const handleAvatarClick=()=> {
    if(auth.user?.role==="ROLE_CUSTOMER"){
      navigate("/my-profile")
    }else {
      navigate("/admin/restaurant")
    }
  }
  return (
    <Box className="sticky top-0 z-50">
      <nav className="bg-[#3d3d3d] px-5 py-3 flex justify-between items-center lg:px-20">
      <div className="flex items-center space-x-4 lg:mr-10 cursor-pointer">
        <li onClick={()=>navigate("/")} className="logo font-semibold text-gray-300 text-2xl list-none">Natty Food</li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div>
          <IconButton className="hover:bg-[#f1f1f1] rounded-full">
            <SearchIcon className="text-[1.5rem] text-gray-500" />
          </IconButton>
        </div>
        <div>
          {auth.user? (
          < Avatar onClick={handleAvatarClick}
            className="bg-white text-[#964e66] hover:bg-[#f1f1f1] transition-all duration-300"
            sx={{ width: 40, height: 40 }}
          >
            {auth.user?.fullName[0].toUpperCase()}
          </Avatar>
          ):(
        <IconButton onClick={()=> navigate("/account/login")}>
          <Person/>
        </IconButton>  
        )}
        </div>
        <div>
          <IconButton className="hover:bg-[#f1f1f1] rounded-full">
            <Badge
              color="primary"
              badgeContent={3}
              className="text-white bg-gray-200 px-1 py-[2px] rounded-full text-[0.8rem] font-medium"
            >
              <ShoppingCartIcon className="text-[1.5rem] text-gray-500" />
            </Badge>
          </IconButton>
        </div>
      </div>
    </nav>
    </Box>
    
  );
};