import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import Item from '../../components/Item';
import { searchItems } from "../../utils/services/outletsAPI";
import {
  Container,
  SearchInput,
  SearchList
} from './styles';

const SearchPage = () => {

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
        console.log(errorMessages);
      }
    );
  };

  return (
    <Container>
      <SearchInput>
        <Input
          placeholder="Search for items in the store"
          value={query}
          onChange={onSearch}
          prefix={<SearchOutlined />}
        />
        <CloseOutlined onClick={clearQuery} />
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
    </Container>
  );
};

export default SearchPage;
