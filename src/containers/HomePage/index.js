import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import {
  Container,
} from './styles';
import { OutletContext } from '../../utils/context/outlet';

const HomePage = () => {

  const subCategories = useContext(OutletContext);
  console.log(subCategories, 'subCategories');

  return (
    <Container>
      <Row type="flex" className="subCatList">
        {
          subCategories && subCategories.sub_categories && subCategories.sub_categories.map(dataItem =>
            <Col xs={8} sm={8} md={5} lg={4} xl={4} key={dataItem.id} className="subCatItems">
              <Link to={`/${dataItem.name}/${dataItem.id}`}>
                <span className="itemImage">
                  <img src={dataItem.image_url} alt={dataItem.name} />
                </span>
                <span>{dataItem.name}</span>
              </Link>
            </Col>  
          )
        }
      </Row>
    </Container>
  );
};

export default HomePage;
