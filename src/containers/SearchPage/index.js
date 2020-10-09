import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import Item from '../../components/Item';
import { searchItems } from "../../utils/services/outletsAPI";
import EmptyState from "../../images/empty-search.png";
import {
  Container,
  SearchInput,
  SearchList,
  SearchImage
} from './styles';

const SearchPage = () => {

  //show empty state
  const[showImage, setShowImage] = useState(true);

  const[loading, setLoading] = useState(false);

  const[query, setQuery] = useState('');

  const[allItems, setAllItems] = useState([]);

  const onSearch = e => {
    setLoading(true);
    setQuery(e.target.value);
    getSearchItems(e.target.value);
  };

  const clearQuery = () => {
    setQuery('');
    setAllItems([]);
  };

  const getSearchItems = (value) => {
    searchItems(
      value,
      success => {
        setTimeout(() => {
          setAllItems(success.data);
          setLoading(false);
        }, 1000);
      },
      errorMessages => {
        setLoading(false);
      }
    );
  };

  const focus = () => {
    setShowImage(false);
    var elem = document.getElementById('mobMenu');
    if(elem !== null) {
      elem.className = "keypadOpen";
    }
  };

  const blur = () => {
    var elem = document.getElementById('mobMenu');
    if(elem !== null) {
      elem.className = "keypadClose";
    }
  };

  return (
    <Container>
      <SearchInput>
        <Input
          placeholder="Search for items in the store"
          value={query}
          onChange={onSearch}
          prefix={<SearchOutlined />}
          onFocus={focus}
          onBlur={blur}
          suffix={<CloseOutlined onClick={clearQuery} />}
        />
      </SearchInput>
      {
        !loading &&
        <SearchList>
          {
            allItems && allItems.map(item =>
              <Item data={item} key={item.item.id} />
            )
          }
        </SearchList>
      }
      {
        showImage &&
        <SearchImage>
          <img src={EmptyState} alt="Search" />
        </SearchImage>
      }
    </Container>
  );
};

export default SearchPage;
