import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import DropDown from './components/DropDown';
import Loader from "./components/Loader";

import {fetchData} from "./services";
import {Container, Row} from './App.style';

const App = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [names, setNames] = useState([]);

   const handleSubmit = async (inputValue) => {
      setIsLoading(true);

      // mocking fetch request
      try {
         const data = await fetchData();

         const filteredData = data.filter(item =>
             item.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1);

         setNames(filteredData);
      } catch (error) {
         console.log('ERROR', error.message);
      } finally {
         setIsLoading(false);
      }
   };

   return (
       <Container>
          <Row>
             <SearchBar onSubmit={handleSubmit}/>
          </Row>
          <Row>
             {isLoading
                 ? <Loader/>
                 : <DropDown label="Names" data={names}/>
             }
          </Row>
       </Container>
   );
};

export default App;
