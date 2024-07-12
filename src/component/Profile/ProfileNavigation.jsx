import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { AddReaction } from "@mui/icons-material";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../state/Authentication/Action";
import { useDispatch } from "react-redux";

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <AddReaction /> },
  { title: "Payments", icon: <AccountBalanceWalletIcon /> },
  { title: "Notification", icon: <NotificationsIcon /> },
  { title: "Events", icon: <EventIcon /> },
  { title: "Logout", icon: <LogoutIcon /> },
];

function ProfileNavigation({ open, handleClose }) {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleNavigate = (item) => {
    if(item.title === "Logout"){
      dispatch(logout());
      navigate("/")
    }else
    navigate(`/my-profile/${item.title.toLowerCase()}`);
  };

  return (
    <div>
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        onClose={handleClose}
        open={isSmallScreen ? open : true}
        anchor="left"
        sx={{ zIndex: -1 }}
      >
        <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16">
          {menu.map((item, index) => (
            <React.Fragment key={index}>
              <div onClick={() => handleNavigate(item)} className="px-5 flex items-center space-x-3 cursor-pointer">
                {item.icon}
                <span>{item.title}</span>
              </div>
              {index !== menu.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </Drawer>
    </div>
  );
}

export default ProfileNavigation;
