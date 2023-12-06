import { Outlet } from 'react-router-dom';

export default function UserHome() {

    return(
        <div id='userHome-div'>
            <h3>Welcome to the User Home Page!</h3>

            <Outlet/>
        </div>
    )
}