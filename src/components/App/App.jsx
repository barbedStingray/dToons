import { useState, useEffect } from 'react';
import axios from 'axios';

// components
import Header from '../Header/Header.jsx';
import DtoonDisplay from '../DtoonDisplay/DtoonMap.jsx';


function App () {

  // variables
  const [dtoonList, setDtoonList] = useState([]);

  // GET /dtoons

  const getDtoonList = () => {

  axios.get('/dtoons').then((response) => {
    console.log(`match GET /dtoons`, response.data);

    setDtoonList(response.data);

  }).catch((error) => {
    console.log(`error GET /dtoons`);
    alert(`error GET /dtoons`);
  });
}


  // function call
    useEffect(() => {
      getDtoonList();
    }, []);



  
  return (

    <div>
      <Header /> 

      <DtoonDisplay 
        dtoonList={dtoonList}
      />


      {JSON.stringify(dtoonList)}

    </div>
  );

}

export default App
