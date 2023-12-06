
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


export default function ShopCards(props) {

    const dispatch = useDispatch();

    const soloCardDetails = () => {
        console.log('dtoon details id:', props.dtoon.id);
        const action = { type: 'ADMIN_CARD_DETAILS', payload: props.dtoon.id }
        dispatch(action);
    }




    return (
        <div id="dtoon-card">

            <Link
                onClick={soloCardDetails}
                to={'/soloCard'}
            >

                <img
                    className={props.dtoon.color}
                    id="card-img" alt={props.dtoon.character}
                    src={props.dtoon.image}
                />
            </Link>

            <p id="dtoon-number" className={props.dtoon.color} >{props.dtoon.number}</p>


        </div>
    )
}