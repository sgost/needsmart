import React from "react";
import {
  NavLink
} from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../images/home-icon.svg";
import { ReactComponent as Search } from "../../images/search.svg";
import { ReactComponent as User } from "../../images/user-outlined.svg";
import { ReactComponent as OrdersIcon } from "../../images/orders-icon.svg";
import {
  MenuListContainer,
  MobMenuList,
  // MenuListIcon
} from "./styles";

const MobileMenu = ({ outletDetails, cartSummary, cartClick }) => {
  return (
    <MenuListContainer>
      <MobMenuList>
        <NavLink to="/" exact>
          <HomeIcon />
          {/* <MenuListIcon>
            <img src={HomeIcon} alt="Home" />
          </MenuListIcon> */}
          <span>Home</span>
        </NavLink>
      </MobMenuList>
      <MobMenuList>
        <NavLink to="/search">
          <Search />
          {/* <MenuListIcon>
            <img src={Search} alt="Search" />
          </MenuListIcon> */}
          <span>Search</span>
        </NavLink>
      </MobMenuList>
      <MobMenuList>
        <NavLink to="/orders">
          <OrdersIcon />
          {/* <MenuListIcon>
            <img src={OrdersIcon} alt="Orders" />
          </MenuListIcon> */}
          <span>Orders</span>
        </NavLink>
      </MobMenuList>
      <MobMenuList>
        <NavLink to="/account">
          <User />
          {/* <MenuListIcon>
            <img src={User} alt="Account" />
          </MenuListIcon> */}
          <span>Account</span>
        </NavLink>
      </MobMenuList>
    </MenuListContainer>
  );
}

export default MobileMenu;
