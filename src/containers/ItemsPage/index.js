import React, { Fragment, useState, useEffect, useContext } from 'react';
import { withRouter, Link } from "react-router-dom";
import { Row, Col, Menu } from "antd";
import ItemsList from '../../containers/ItemsList';
import CartItemsList from "../../components/CartItemsList";
import { OutletContext } from '../../utils/context/outlet';
import { CartSummaryContext } from '../../utils/context/cartSummary';
import {
  Container,
  CartContainer,
  Title
} from './styles';

const ItemsPage = ({ match }) => {

  const subCategories = useContext(OutletContext);

  const[currentKey, setCurrentKey] = useState('');

  useEffect(() => {
    if(match.params.id) {
      setCurrentKey(match.params.id);
    }
  }, [match]);

  const[menuMode, setMenuMode] = useState('vertical');

  useEffect(() => {
    if(typeof window !== undefined) {
      if(window.innerWidth < 769) {
        setMenuMode('horizontal');
      }
    }
  }, []);

  const { cartSummary } = useContext(CartSummaryContext);

  return (
    <Container>
      <Row className="itemsListSection">
        <Col xs={24} sm={24} md={4} lg={4} xl={4}>
          <Menu mode={menuMode} selectedKeys={[currentKey]}>
            <Menu.Item key="all">
              <Link to="/items/all">All</Link>
            </Menu.Item>
            {
              subCategories && subCategories.sub_categories && subCategories.sub_categories.map(dataItem =>
              <Menu.Item key={dataItem.id}>
                <Link to={`/${dataItem.name}/${dataItem.id}`}>{dataItem.name}</Link>
              </Menu.Item>
              )
            }
          </Menu>
        </Col>
        <Col xs={24} sm={24} md={10} lg={9} xl={9} className="itemsList">
          <ItemsList subCatId={match.params.id} />
        </Col>
        <Col xs={24} sm={24} md={10} lg={11} xl={11} className="cartList">
          <CartContainer>
            {
              Object.keys(cartSummary).length !== 0 &&
              <Fragment>
                <Title>Cart</Title>
                <CartItemsList />
              </Fragment>
            }
          </CartContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(ItemsPage);
