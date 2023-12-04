
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CardNameInput from './CardName/CardName.jsx';
import CardChar from './CardChar/CardChar.jsx';
import CardImage from './CardImage/CardImage.jsx';
import CardColor from './CardColor/CardColor.jsx';
import CardNumber from './CardNumber/CardNumber.jsx';
import AbilityOne from './AbilityOne/AbilityOne.jsx';
import AbilityTwo from './AbilityTwo/AbilityTwo.jsx';
import CardType from './CardType/CardType';
import CardKind from './CardKind/CardKind';
import CardGender from './CardGender/CardGender';
import CardRole from './CardRole/CardRole.jsx';
import CardMovie from './CardMovie/CardMovie.jsx';
import CardCost from './CardCost/CardCost.jsx';

import './AddDtoon.css';



function AddDtoon() {

    const history = useHistory();
    const dispatch = useDispatch();

    // dtoon CARD object
    const [newDtoonCard, setNewDtoonCard] = useState({
        cardname: '',
        character: '',
        color: '',
        number: '',
        image: '',
        abilityone: '',
        abilitytwo: '',
        type: '',
        kind: '',
        gender: '',
        role: '',
        moive: '',
        cost: ''
    });

    console.log('new dToon Object:', newDtoonCard);


    const handleChange = (key) => (event) => {
        console.log('eventChange happened');
        setNewDtoonCard({ ...newDtoonCard, [key]: event.target.value });
    }


    // POST request /dtoons
    const createNewDtoon = (e) => {
        e.preventDefault();
        console.log(`creating your dToon...`);
        dispatch({ type: 'ADMIN_POST_DTOON', payload: newDtoonCard });
    }



    return (
        <div id="add-dtoon">
            <form onSubmit={createNewDtoon}>

                <CardNameInput newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardChar newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardColor newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardNumber newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardImage newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <AbilityOne newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <AbilityTwo newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardType newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardKind newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardGender newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardRole newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardMovie newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardCost newDtoonCard={newDtoonCard} handleChange={handleChange} />

                <button>Create dToon</button>
            </form>

        </div>
    )
}
export default AddDtoon;