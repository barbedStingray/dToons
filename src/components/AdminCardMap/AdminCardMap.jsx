
import AdminCards from '../AdminCards/AdminCards.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './AdminCardMap.css';


function AdminCardMap() {

    const dispatch = useDispatch();
    let adminCards = useSelector(store => store.adminCards);
    console.log(`adminCards:`, adminCards);

    // GET /admin/dtoons
    const fetchAdminCards = () => {
        console.log(`fetching the Admin Cards`);
        let action = { type: 'FETCH_ADMIN_CARDS' }
        dispatch(action);
    }
    // page refresh
    useEffect(() => {
        fetchAdminCards();
    }, []);




    return (
        <div id='adminCard-map' >
            <div id='adminNav-div'>
                <p>Navigation and Searches Here</p>
            </div>

            <div id="dtoon-display">
                {
                    adminCards.map((dtoon) =>
                    (<AdminCards
                        key={dtoon.id}
                        dtoon={dtoon}
                    />))
                }
            </div>
        </div>
    )
}

export default AdminCardMap;