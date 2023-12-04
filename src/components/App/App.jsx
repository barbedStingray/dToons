
// middleware
import { HashRouter as Router, Route, Link } from 'react-router-dom';


// components
import AdminHeader from '../AdminHeader/AdminHeader.jsx';
import AdminCardMap from '../AdminCardMap/AdminCardMap.jsx';
import AdminCardDetails from '../AdminCardDetails/AdminCardDetails.jsx';
import AdminFooter from '../AdminFooter/AdminFooter.jsx';
import AddDtoon from '../AddDtoon/AddDtoon.jsx';
import HomePage from '../HomePage/HomePage.jsx';
import LogInPage from '../LogInPage/LogInPage.jsx';


// css
import './App.css';


function App() {


  return (
    <div id="web-page">
      <Router>



          <AdminHeader />
          <Route exact path='/'> <HomePage /> </Route>
          <Route exact path='/admindToons'> <AdminCardMap /> </Route>
          <Route exact path='/adminCreate'> <AddDtoon /> </Route>
          <Route exact path='/admindToonDetails'> <AdminCardDetails /> </Route>
          <AdminFooter />

          <Route exact path='/login'> <LogInPage /> </Route>
          

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

