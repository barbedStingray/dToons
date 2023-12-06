
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './AdminCardDetails.css';

import PUTbutton from '../PUTbutton/PUTbutton.jsx';


function AdminCardDetails() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cardDetails = useSelector(store => store.adminCardDetails);

    const [editForm, setEditForm] = useState(false);
    const [alterDtoon, setAlterDtoon] = useState({
        cardname: '',
        character: '',
        color: '',
        number: '',
        image: '',
        abilityone: '',
        abilitytwo: '',
        type: '',
        gender: '',
        role: '',
        moive: '',
        cost: ''
    });


    const handleChange = (key) => (event) => {
        console.log('eventChange happened');
        setAlterDtoon({ ...alterDtoon, [key]: event.target.value });
    }

    function editDtoonButton() {
        // ** make form appear
        console.log(`editing dToon...`);
        setEditForm(!editForm);


        // todo set alterDtoon properties
        setAlterDtoon({
            cardname: cardDetails[0].cardname,
            character: '',
            color: '',
            number: '',
            image: '',
            abilityone: '',
            abilitytwo: '',
            type: '',
            gender: '',
            role: '',
            moive: '',
            cost: ''
        })
        console.log(`alterDtoon:`, alterDtoon);
    }

    // submit (PUT) your edits
    function submitEdits(e) {
        e.prevent.default();
        console.log(`submitting edits`);

        dispatch({ type: 'UPDATE_DTOON_CARD', payload: alterDtoon });

        // navigate('/admindToons')

    }



    return (
        <div id="adminCard-details">
            {cardDetails.map((dtoon) =>
                <>
                    <div id='card-attributes'>
                        <div id='basic-attributes'>
                            <div id='details-div' >
                                <p>Toon ID: {dtoon.id}</p>
                                <p>Card Name: {dtoon.cardname}</p>
                                <p>Movie: {dtoon.movie_id}</p>
                                <p>Character: {dtoon.character}</p>
                                <p>Color: {dtoon.color}</p>
                                <p>Number: {dtoon.number}</p>
                                <p>Ability One: {dtoon.abilityone}</p>
                                <p>Ability Two: {dtoon.abilitytwo}</p>

                            </div>

                            <div id='button-div'>
                                <PUTbutton />
                                <PUTbutton />
                                <PUTbutton />
                                <PUTbutton />
                                <PUTbutton />
                                <PUTbutton />
                                <PUTbutton />
                                <PUTbutton />
                            </div>
                        </div>


                        <div id='image-attributes'>
                            <div id='edit-imagePath'>
                                <p>ImagePath: {dtoon.image}</p>

                                <PUTbutton />
                            </div>
                            <div id='admin-photo'>
                                <img
                                    className={dtoon.color}
                                    id="card-img" alt={dtoon.character}
                                    src={dtoon.image}
                                />
                            </div>
                            <div id='descriptors-attributes'>

                                <p>Type: {dtoon.type}</p>
                                <p>Gender: {dtoon.gender}</p>
                                <p>Role: {dtoon.role}</p>
                                <p>Cost: {dtoon.cost}</p>
                                {/* {dtoon.kind.map((item) =>
                                <p>{item}</p>)} */}
                                {/* <p>card Kind: {dtoon.kind}</p> */}
                            </div>
                        </div>
                    </div>
                </>
            )}
            <button
                onClick={editDtoonButton}
            >EDIT ALL BUTTON???</button>

            <div className={editForm ? 'visibleEdit' : 'invisibleEdit'}>
                <h3>Altering Dtoon Form</h3>

                <form>
                    <div id="cardName-edit">
                        <label><input
                            value={alterDtoon.cardname}
                            onChange={handleChange('cardname')}
                            type="text"
                            placeholder="card name">
                        </input></label>
                        {alterDtoon.cardname}
                    </div>
                    <button onClick={submitEdits}>Commit Changes</button>
                </form>

            </div>

        </div>
    )
}
export default AdminCardDetails;