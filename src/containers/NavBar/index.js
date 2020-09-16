import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import HomePage from "../../containers/HomePage";
import ItemsList from "../../containers/ItemsList";
import Search from "../../images/search.svg";
import User from "../../images/user-outlined.svg";
import Cart from "../../images/cart.svg";
import {
  Header,
  LogoContainer,
  HeaderText,
  MenuContainer,
  MenuItem,
  MenuIcon
} from "./styles";
import { OutletContext } from '../../utils/context/outlet';
import { UserContext } from '../../utils/context/user';

const NavBar = () => {
  function EmptyState() {
    return (
      <div style={{padding: '80px'}}>
        <h2 style={{textAlign: 'center'}}>This page is under construction.</h2>
      </div>
    );
  }

  const outletDetails = useContext(OutletContext);
  console.log(outletDetails, 'outletDetails');

  const { user } = useContext(UserContext);
  console.log(user, 'user');

  return (
    <Router>
      {
        outletDetails &&
      <Header>
        <LogoContainer>
          <h1>
            <NavLink to="/">
              {
                outletDetails.image_url.length > 2 &&
                <img src={outletDetails.image_url} alt={outletDetails.name} />
              }
              <HeaderText>
                {outletDetails.name}
                <span className="subHeading">Powered by Needsmart-Fidisys</span>
              </HeaderText>
            </NavLink>
          </h1>
        </LogoContainer>
        <MenuContainer>
          <MenuItem>
            <NavLink to="/search">
              <MenuIcon>
                <img src={Search} alt="Search" />
              </MenuIcon>
              <span>Search</span>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/account">
              <MenuIcon>
                <img src={User} alt="Account" />
              </MenuIcon>
              <span>Account</span>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/cart">
              <MenuIcon>
                <img src={Cart} alt="Cart" />
              </MenuIcon>
              <span>Cart</span>
            </NavLink>
          </MenuItem>
        </MenuContainer>
      </Header>
      }
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/search">
          <EmptyState />
        </Route>
        <Route path="/account">
          <EmptyState />
        </Route>
        <Route path="/cart">
          <EmptyState />
        </Route>
        <Route path="/:name/:id">
          <ItemsList />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;
