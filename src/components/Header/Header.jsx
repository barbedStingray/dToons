

import { useHistory } from 'react-router-dom';


function Header() {

    const history = useHistory();

    const addNewDtoon = () => {
        console.log(`going to add new dtoon page`);
        history.push('/admin');
    }

    // Go Back to dtoon list
    const goBack = () => {
        console.log(`go back to dtoons`);

        history.push('/');
    }


    return (
        <div id="header-div">
            <h1>Welcome to dToons!</h1>
            <button onClick={addNewDtoon} >Add dToon</button>
            <button onClick={goBack} >Go Back</button>

        </div>
    )
}

export default Header;