
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function AdminCards(props) {

    const dispatch = useDispatch();


    // Display Single dToon Details
    const adminDisplayCardDetails = () => {
        console.log('dtoon details id:', props.dtoon.id);
        const action = { type: 'ADMIN_CARD_DETAILS', payload: props.dtoon.id }
        dispatch(action);
    }


    // DELETE dToon
    const adminDeleteDtoon = () => {
        console.log(`deleting dToon Char/ID:`, props.dtoon.character, props.dtoon.id);
        dispatch({ type: 'ADMIN_DELETE_DTOON', payload: props.dtoon.id });
    }


    return(
        <div id="dtoon-card">

            <Link 
                onClick={adminDisplayCardDetails}
                to={'/dtoonDescription'}
            >
                <img 
                    className={props.dtoon.color} 
                    id="card-img" alt={props.dtoon.character} 
                    src={props.dtoon.image} 
                />
            </Link>

            <p id="dtoon-number" className={props.dtoon.color} >{props.dtoon.number}</p>
            <button onClick={adminDeleteDtoon} >Delete dToon</button>

        </div>
    )
}

export default AdminCards;

