
import AdminCards from '../AdminCards/AdminCards.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function AdminCardMap() {

    const dispatch = useDispatch();
    let adminCards = useSelector(store => store.adminCards);
    console.log(`adminCards:`, adminCards);

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
        <div id="dtoon-display">
            {
                adminCards.map((dtoon) => 
                    (<AdminCards 
                        key={dtoon.id}
                        dtoon={dtoon}
                    />))
            }

        </div>
    )
}

export default AdminCardMap;