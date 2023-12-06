

// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function AdminHeader() {

    // const history = useHistory();
    let navigate = useNavigate();
    // console.log(`navigate:`, navigate);

    const addNewDtoon = () => {
        console.log(`going to add new dtoon page`);
        navigate('/adminCreate');
    }

    // Go Back to dtoon list
    const returnToHomePage = () => {
        console.log(`go back to home`);
        navigate('/');
    }

    const viewdToonList = () => {
        console.log(`go back to dtoons`);
        navigate('/admindToons');
    }
    const loginPage = () => {
        console.log(`go to login`);
        navigate('/login');
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