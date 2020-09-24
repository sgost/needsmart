import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Drawer, Dropdown } from 'antd';
import HomePage from "../../containers/HomePage";
import ItemsPage from "../../containers/ItemsPage";
import Cart from "../../containers/Cart";
import PlacingOrder from '../../containers/PlacingOrder';
import SearchPage from '../../containers/SearchPage';
import OrdersPage from '../../containers/OrdersPage';
import LoginPage from '../../containers/Login';
import AccountDropdown from '../../components/AccountDropdown';
import { UserContext } from '../../utils/context/user';
import { OutletContext } from '../../utils/context/outlet';
import { CartSummaryContext } from '../../utils/context/cartSummary';
import Search from "../../images/search.svg";
import User from "../../images/user-outlined.svg";
import CartIcon from "../../images/cart.svg";
import OrdersIcon from "../../images/orders-icon.svg";
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

  const { user, getDetails } = useContext(UserContext);

  // function EmptyState() {
  //   return (
  //     <div style={{padding: '80px'}}>
  //       <h2 style={{textAlign: 'center'}}>This page is under construction.</h2>
  //     </div>
  //   );
  // }

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

  //account
  const [showLogin, setShowLogin] = useState(false);

  const account = () => {
    if(user === null) {
      setShowLogin(true);
    } else {

    }
  };

  const onLoginClose = () => {
    setShowLogin(false);
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
            <NavLink className="link" to="/orders">
              <MenuIcon>
                <img src={OrdersIcon} alt="Orders" />
              </MenuIcon>
              <span>Orders</span>
            </NavLink>
          </MenuItem>
          <MenuItem>
            {
              user !== null ?
              <Dropdown
                overlay={<AccountDropdown user={user} userDetails={getDetails} />}
                placement="bottomCenter"
                arrow
                overlayClassName="accountDropdown"
              >
                <span className="link" onClick={account}>
                  <MenuIcon>
                    <img src={User} alt="Account" />
                  </MenuIcon>
                  <span>Account</span>
                </span>
              </Dropdown> :
              <span className="link" onClick={account}>
                <MenuIcon>
                  <img src={User} alt="Account" />
                </MenuIcon>
                <span>Log in</span>
              </span>
            }
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
          <SearchPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/:name/:id">
          <ItemsPage />
        </Route>
        <Route path="/checkout">
          <PlacingOrder />
        </Route>
      </Switch>
      <Drawer
        title="Log in"
        placement="right"
        closable={true}
        onClose={onLoginClose}
        visible={showLogin}
        className="customDrawer"
        destroyOnClose={true}
      >
        <LoginPage closeDrawer={onLoginClose} />
      </Drawer>
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
