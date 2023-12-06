
// middleware
import { Route, Routes, Link, Outlet } from 'react-router-dom';
// "react-router": "^6.18.0",
// "react-router-dom": "^5.2.0",



// components
import AdminHeader from '../AdminHeader/AdminHeader.jsx';
import AdminFooter from '../AdminFooter/AdminFooter.jsx';
import AdminCardMap from '../AdminCardMap/AdminCardMap.jsx';
import AdminCardDetails from '../AdminCardDetails/AdminCardDetails.jsx';
import AddDtoon from '../AddDtoon/AddDtoon.jsx';
import AdminHome from '../AdminHome/AdminHome.jsx';
import LogInPage from '../LogInPage/LogInPage.jsx';
import UserHome from '../UserHome/UserHome.jsx';
import YourDtoons from '../YourDtoons/YourDtoons.jsx';
import DToonShop from '../dToonShop/dToonShop.jsx';
import TheGame from '../TheGame/TheGame.jsx';
import SoloCardDetails from '../SoloCardDetails/SoloCardDetails.jsx';



// css
import './App.css';


function App() {


  return (
    <div id="web-page">

    <nav>
      <ul>
        <li> <Link to='/'>Log In</Link> </li>
        <li> <Link to='/user'>User Home</Link> </li>
        <li> <Link to='/admin'>Admin Home</Link> </li>
        <li> <Link to='/adminDtoons'>Admin dToons</Link> </li>
        <li> <Link to='/addNewToon'>Add New dToon</Link> </li>
        <li> <Link to='/yourDtoons'>My Collection</Link> </li>
        <li> <Link to='/dToonShop'>View dToon Shop</Link> </li>
        <li> <Link to='/theGame'>Play Game</Link> </li>
      </ul>
    </nav>


      <Routes>

        <Route path={'/'} element={<LogInPage/>} />

        {/* User Routes */}
          <Route path={'/user'} element={<UserHome/>} />
          <Route path={'/yourDtoons'} element={<YourDtoons/>} />
          <Route path={'/dToonShop'} element={<DToonShop/>} />
          <Route path={'/soloCard'} element={<SoloCardDetails/>} />
          <Route path={'/theGame'} element={<TheGame/>} />


        {/* Admin Routes */}
        {/* <Route element={<> <AdminHeader /> <AdminFooter /> </>} > */}
          <Route path={'/admin'} element={<AdminHome />} />
          <Route path={'/adminDtoons'} element={<AdminCardMap />} />
          <Route path={'/addNewToon'} element={<AddDtoon />} />
          <Route path={'/admindToonDetails'} element={<AdminCardDetails />} />
        {/* </Route> */}

      </Routes>

    </div>
  );
}

export default App;




