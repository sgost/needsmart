import React, { Fragment, useContext, useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Carousel, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { OutletContext } from '../../utils/context/outlet';
import { getAllOffers } from '../../utils/services/offersAPI';
import {
  Container,
  CarouselContainer
} from './styles';

const HomePage = () => {

  const[loading, setLoading] = useState(true);

  const subCategories = useContext(OutletContext);

  const[offers, setOffers] = useState([]);

  useEffect(() => {
    getAllOffers(
      res => {
        setOffers(res.data);
        setLoading(false);
      },
      err => {
        setLoading(false);
      }
    );
  }, []);

  const slider = useRef(null);

  const[showSlides, setShowSlides] = useState(2);
  useEffect(() => {
    if(typeof window !== undefined) {
      if(window.innerWidth < 769) {
        setShowSlides(1);
      }
    }
  }, []);

  return (
    <Fragment>
      {
        subCategories !== null && !loading &&
        <Container>
          {
            offers.length > 0 &&
            <CarouselContainer>
              {
                offers.length > 2 &&
                <span className="leftArrow" onClick={() => slider.current.prev()}>
                  <LeftOutlined />
                </span>
              }
              <Carousel ref={slider} slidesToShow={offers.length > 1 ? showSlides : 1} slidesToScroll={offers.length > 1 ? showSlides : 1}>
                {
                  offers.map(offer =>
                    <div key={offer.id} style={{overflow: 'hidden'}}>
                      <Link to={`/${offer.sub_category.name}/${offer.sub_category.id}`} style={{overflow: 'hidden'}}>
                        <img src={offer.image_url} alt={offer.name} />
                      </Link>
                    </div>
                  )
                }
              </Carousel>
              {
                offers.length > 2 &&
                <span className="rightArrow" onClick={() => slider.current.next()}>
                  <RightOutlined />
                </span>
              }
            </CarouselContainer>
          }
          <Row type="flex" className="subCatList">
            {
              subCategories && subCategories.sub_categories && subCategories.sub_categories.map(dataItem =>
                <Col xs={8} sm={5} md={5} lg={4} xl={4} key={dataItem.id} className="subCatItems">
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
      }
    </Fragment>
  );
};

export default HomePage;
