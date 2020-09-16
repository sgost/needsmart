import React, { useState, useEffect,useContext } from 'react';
import { withRouter, Link } from "react-router-dom";
import { Row, Col, Menu } from "antd";
import Item from '../../components/Item';
import {
  Container
} from './styles';
import { getOutletItems } from "../../utils/services/outletsAPI";
import { OutletContext } from '../../utils/context/outlet';

const ItemsList = ({ match }) => {

  const subCategories = useContext(OutletContext);
  console.log(subCategories, 'subCategories');

  const[items, setItems] = useState([]);

  const[currentKey, setCurrentKey] = useState('');

  useEffect(() => {
    console.log(match.params);
    if(match.params.id) {
      getItems(match.params.id);
      setCurrentKey(match.params.id);
    }
  }, [match]);

  const getItems = id => {
    let subCatId;
    if(id === 'all') {
      subCatId = '';
    } else {
      subCatId = parseInt(id);
    }

    getOutletItems(subCatId, res => {
      console.log(res.data);
      setItems(res.data);
    });
  };

  const[menuMode, setMenuMode] = useState('vertical');
  useEffect(() => {
    if(typeof window !== undefined) {
      if(window.innerWidth < 769) {
        setMenuMode('horizontal');
      }
    }
  }, []);

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
        <Col xs={24} sm={24} md={9} lg={9} xl={9} className="itemsList">
          {
            items && items.map(item =>
              <Item data={item} key={item.item.id} />
            )
          }
        </Col>
        {/* <Col md={11} lg={11} xl={11}>
          cart
        </Col> */}
      </Row>
    </Container>
  );
};

export default withRouter(ItemsList);
