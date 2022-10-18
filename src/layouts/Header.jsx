import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useSelector } from "react-redux";
import { selectUser, logout } from "../features/userSlice";
import { auth } from "../firebase/firebase";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  img {
    object-fit: contain;
    height: 80px;
    margin-left: 5px;
  }
`;

const HeaderMiddle = styled.div`
  display: flex;
  flex: 0.7;
  align-items: center;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 5px;

  > .MuiSvgIcon-root {
    color: gray;
  }

  > input {
    border: none;
    width: 100%;
    padding: 10px;
    outline-width: 0;
    font-size: medium;
    background-color: transparent;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  padding-right: 20px;
`;

const Header = () => {
  const user = useSelector(selectUser);

  const signOut = () => {
    auth.signOut().then((dispatch) => {
      dispatch(logout());
    });
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?WgdQ3Tx7r4ZssTpgfxm1Iwb5KMAG8S4A&size=770:433"
          alt="Logo"
        />
      </HeaderLeft>

      <HeaderMiddle>
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <FormatAlignLeftIcon />
      </HeaderMiddle>

      <HeaderRight>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
