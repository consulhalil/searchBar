import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from "react-router-dom";
import queryString from 'query-string';
import {Wrapper, ClearIcon, Label, SearchButton, SearchField, Form} from './style';

const SearchBar = ({onSubmit}) => {
   const [inputValue, setInputValue] = useState("");

   const history = useHistory();
   const {search, pathname} = history.location;
   const {searchField} = queryString.parse(search);

   useEffect(() => {
      if (searchField) {
         setInputValue(searchField);
         onSubmit(searchField);
      }
   }, []);

   const handleSubmit = event => {
      if (!inputValue) {
         return;
      }

      event.preventDefault();

      updateSearchParams(inputValue);
      onSubmit(inputValue);
   };

   const updateSearchParams = inputValue => {
      history.push({
         pathname,
         search: `?searchField=${inputValue}`,
      });
   };

   const handleSearchValueChange = ({target}) => {
      setInputValue(target.value);
   };

   const handleSearchValueClear = () => {
      setInputValue("");
   };

   return (
       <Form onSubmit={handleSubmit} role="search">
          <Wrapper>
             <Label htmlFor="search-bar">Search Bar</Label>
             <SearchField
                 id="search-bar"
                 name="search-bar"
                 type="text"
                 placeholder="Type a name"
                 value={inputValue}
                 onChange={handleSearchValueChange}
             />
             {inputValue && (
                 <ClearIcon
                     type="button"
                     onClick={handleSearchValueClear}
                 >
                    x
                 </ClearIcon>
             )}
          </Wrapper>
          <SearchButton
              type="submit"
              disabled={!inputValue}
          >
             Search
          </SearchButton>
       </Form>
   );
};

SearchBar.propTypes = {
   onSubmit: PropTypes.func,
};

export default SearchBar;
