
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ShopCards from '../ShopCards/ShopCards.jsx';


export default function DToonShop() {


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
        <div id='dToonShop-div'>
            <h3>Welcome to the dToon Store!</h3>
            <p>--list of dToons for purchase--</p>

            {
                adminCards.map((dtoon) =>
                (<ShopCards
                    key={dtoon.id}
                    dtoon={dtoon}
                />))
            }
        </div>
    )
}