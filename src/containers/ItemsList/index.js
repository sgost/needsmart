import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import Item from '../../components/Item';
import { getOutletItems } from "../../utils/services/outletsAPI";
import {
  Container
} from './styles';

const ItemsList = ({ subCatId }) => {

  const[items, setItems] = useState([]);

  useEffect(() => {
    if(subCatId) {
      let id;
      if(subCatId === 'all') {
        id = '';
      } else {
        id = parseInt(subCatId);
      }
      getItems(id);
    }
  }, [subCatId]);

  const getItems = id => {
    getOutletItems(id, res => {
      setItems(res.data);
    });
  };

  return (
    <Container>
      {
        items && items.map(item =>
          <Item data={item} key={item.item.id} />
        )
      }
    </Container>
  );
};

export default withRouter(ItemsList);
