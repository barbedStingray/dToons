

import { useHistory } from 'react-router-dom';


function AdminHeader() {

    const history = useHistory();

    const addNewDtoon = () => {
        console.log(`going to add new dtoon page`);
        history.push('/adminCreate');
    }

    // Go Back to dtoon list
    const returnToHomePage = () => {
        console.log(`go back to home`);
        history.push('/');
    }

    const viewdToonList = () => {
        console.log(`go back to dtoons`);
        history.push('/admindToons');
    }
    const loginPage = () => {
        console.log(`go to login`);
        history.push('/login');
    }


    return (
        <div id="header-div">
            <h1>Welcome to dToons!</h1>
            <button onClick={addNewDtoon} >Add dToon</button>
            <button onClick={returnToHomePage} >Home Page</button>
            <button onClick={viewdToonList} >View Cards</button>
            <button onClick={loginPage} >Log In</button>

        </div>
    )
}

export default AdminHeader;