import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Drawer } from 'antd';
import HomePage from "../../containers/HomePage";
import ItemsPage from "../../containers/ItemsPage";
import Cart from "../../containers/Cart";
import { OutletContext } from '../../utils/context/outlet';
import { CartSummaryContext } from '../../utils/context/cartSummary';
import Search from "../../images/search.svg";
import User from "../../images/user-outlined.svg";
import CartIcon from "../../images/cart.svg";
import {
  Header,
  LogoContainer,
  HeaderText,
  MenuContainer,
  MenuItem,
  MenuIcon,
  CartNotify
} from "./styles";

const NavBar = () => {
  function EmptyState() {
    return (
      <div style={{padding: '80px'}}>
        <h2 style={{textAlign: 'center'}}>This page is under construction.</h2>
      </div>
    );
  }

  const outletDetails = useContext(OutletContext);

  //cart
  const [showCart, setShowCart] = useState(false);

  const { cartSummary } = useContext(CartSummaryContext);

  const cartClick = () => {
    setShowCart(true);
  };

  const onClose = () => {
    setShowCart(false);
  };

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
            <NavLink className="link" to="/search">
              <MenuIcon>
                <img src={Search} alt="Search" />
              </MenuIcon>
              <span>Search</span>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink className="link" to="/account">
              <MenuIcon>
                <img src={User} alt="Account" />
              </MenuIcon>
              <span>Account</span>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <span className="link" onClick={cartClick}>
              <MenuIcon>
                <img src={CartIcon} alt="Cart" />
                {
                  Object.keys(cartSummary).length !== 0 && cartSummary.cart_items.length && <CartNotify />
                }
              </MenuIcon>
              <span>Cart</span>
            </span>
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
          <ItemsPage />
        </Route>
      </Switch>
      <Drawer
        title="Cart"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={showCart}
        className="customDrawer"
        destroyOnClose={true}
      >
        <Cart outletDetails={outletDetails} cartSummary={cartSummary} onClose={onClose} />
      </Drawer>
    </Router>
  );
}

export default NavBar;
