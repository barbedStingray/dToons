
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function DtoonCard(props) {

    const dispatch = useDispatch();


    // function that renders new page for single dtoon
    const dtoonDescription = (e) => {
        console.log('dtoon object:', props.dtoon);

        // dispatch
        const action = { type: 'SHOW_CARD', payload: props.dtoon }
        dispatch(action);
    }

    const deleteDtoon = () => {
        console.log(`DELETE /dtoons request for:`, props.dtoon.character);

        axios.delete(`/dtoons/${props.dtoon.id}`).then(() => {
            console.log(`DELETE /dtoons success`);

            props.getDtoonList();

        }).catch((error) => {
            console.log(`DELETE /dtoons error`, error);
            alert(`DELETE /dtoons error`)
        });
    }


    return(
        <div id="dtoon-card">
            {/* <h3>{props.dtoon.character}</h3> */}

            {/* <Link to={`/${props.dtoon.character}`}> */}
            <Link 
                onClick={dtoonDescription}
                to={'/dtoonDescription'}
            >
                <img 
                    className={props.dtoon.color} 
                    id="card-img" alt={props.dtoon.character} 
                    src={props.dtoon.image} 
                />
            </Link>

            <p id="dtoon-number" className={props.dtoon.color} >{props.dtoon.number}</p>
            <button onClick={deleteDtoon} >Delete dToon</button>

        </div>
    )
}

export default DtoonCard;

