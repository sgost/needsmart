import React from "react";
import {
  NavLink
} from "react-router-dom";
import MoneyIcon from "../../images/money-icon.svg";
import ClockIcon from "../../images/clock-icon.svg";
import CartIcon from "../../images/cart.svg";
import {
  Header,
  LogoContainer,
  HeaderText,
  OutletSection,
  OutletTiming,
  MenuContainer,
  MenuItem,
  MenuIcon,
  CartNotify
} from "./styles";

const MobileHeader = ({ outletDetails, cartSummary, cartClick }) => {
  return (
    <Header>
      <LogoContainer>
        <h1>
          <NavLink to="/">
            <HeaderText>
              {outletDetails.name}
              <OutletSection>
                <OutletTiming>
                  <img src={MoneyIcon} alt="payment-mode" />
                  {
                    outletDetails.payment_modes && outletDetails.payment_modes.map(mode =>
                      <span className="payModes" key={mode.key}>{mode.key}</span>
                    )
                  }
                </OutletTiming>
                <OutletTiming>
                  <img src={ClockIcon} alt="delivery-time" />
                  <span>Delivers between {outletDetails.delivery_start_time} - {outletDetails.delivery_end_time}</span>
                </OutletTiming>
              </OutletSection>
            </HeaderText>
          </NavLink>
        </h1>
      </LogoContainer>
      <MenuContainer>
        <MenuItem>
          <span className="link" onClick={cartClick}>
            <MenuIcon>
              <img src={CartIcon} alt="Cart" />
              {
                Object.keys(cartSummary).length !== 0 && cartSummary.cart_items.length && <CartNotify />
              }
            </MenuIcon>
          </span>
        </MenuItem>
      </MenuContainer>
    </Header>
  );
}

export default MobileHeader;
