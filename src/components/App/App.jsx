
// middleware
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { HashRouter as Router, Link } from 'react-router-dom';


// components
import Header from '../Header/Header.jsx';
import DtoonDisplay from '../DtoonDisplay/DtoonMap.jsx';
import DtoonDesc from '../DtoonDesc/DtoonDesc.jsx';
import Footer from '../Footer/Footer.jsx';
import AddDtoon from '../AddDtoon/AddDtoon.jsx';


// css
import './App.css';


function App() {

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
    <div id="web-page">
      <Router>

        <Header />

        <Route exact path='/'>
          <DtoonDisplay
            dtoonList={dtoonList}
            getDtoonList={getDtoonList}
          />
        </Route>

        <Route exact path='/dtoonDescription'>
          <DtoonDesc />
        </Route>

        <Route exact path='/admin'>
          <AddDtoon 
            getDtoonList={getDtoonList}
          />
        </Route>


        <Footer />

      </Router>

    </div>

  );
}

export default App;



// newest version code for react-router-dom (dont forget Outlet to render)

{/* <Route element={ <> <Header /> <Footer /> </> }>

        <Route path={'/'} element={<DtoonDisplay  
              dtoonList={dtoonList} 
              getDtoonList={getDtoonList} />} />
        <Route path={'/dtoonDescription'} element={<DtoonDesc />} />
        <Route path={'/admin'} element ={<AddDtoon getDtoonList={getDtoonList} />} />

      </Route>

      {/* <Route element={ <> <AdminHeader /> <Footer /> </> }>
        <Route path={'/admin'} element ={<AddDtoon />} />
      </Route> */}
{/* <Route path={'*'} element={<NotFound />} />  */ }

