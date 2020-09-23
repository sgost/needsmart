import React, { Fragment, useEffect, useState } from 'react';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { Row, Col } from 'antd';
import Order from '../../components/Order';
import OrderDetails from '../../containers/OrderDetails';
import EmptyState from "../../components/EmptyState";
import EmptyOrders from "../../images/no-orders.png";
import { getMyOrders } from "../../utils/services/ordersAPI";
import {
  Container
} from './styles';

const OrdersPage = () => {

  const[loading, setLoading] = useState(true);

  const history = useHistory();

  const[orders, setOrders] = useState([]);

  const[currentId, setCurrentId] = useState('');

  useEffect(() => {
    getMyOrders(
      res => {
        setOrders(res.data);
        setLoading(false);
        if(res.data.length > 0) {
          history.push('/orders/' + res.data[0].id);
          setCurrentId(res.data[0].id);
        }
      },
      err => {
        console.log(err);
      }
    );
  }, []);

  useEffect(() => {
    if(typeof window !== undefined) {
      var url = window.location.pathname;
      var id = url.substring(url.lastIndexOf('/') + 1);
      setCurrentId(parseInt(id));
    }
  }, [currentId]);

  const orderDetails = (order) => {
    setCurrentId(order.id);
    history.push('/orders/' + order.id);
  };

  return (
    <Fragment>
      {
        !loading &&
        <Container>
          {
            orders.length > 0 ?
            <Row className="ordersRow">
              <Col xs={24} sm={24} md={13} lg={13} xl={13} className="ordersListCol">
                <ul>
                  {
                    orders && orders.map(order =>
                      <li className="ordersListItem" key={order.id} onClick={() => orderDetails(order)}>
                        <Order data={order} currentId={currentId} />
                      </li>
                    )
                  }
                </ul>
              </Col>
              <Col xs={24} sm={24} md={11} lg={11} xl={11} className="ordersDetailsCol">
                <Switch>
                  <Route path="/orders/:id">
                    <OrderDetails />
                  </Route>
                </Switch>
              </Col>
            </Row> :
            <EmptyState
              image={EmptyOrders}
              title="No orders yet"
              description={`Place your first order from ‘Home’`}
              btnName="Go to Home"
              linkTo="/"
            />
          }
        </Container>
      }
    </Fragment>
  );
};

export default OrdersPage;
