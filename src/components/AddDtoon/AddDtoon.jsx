
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

    // const history = useHistory();
    const dispatch = useDispatch();


    // GET for type_kind table to populate form
    const getTypesTable = () => {
        dispatch({ type: 'GET_TYPES_TABLE' });
    }
    useEffect(() => {
        getTypesTable();
    }, []);


    // POST request /dtoons
    const createNewDtoon = (e) => {
        e.preventDefault();
        console.log(`creating your dToon...`);
        dispatch({ type: 'ADMIN_POST_DTOON', payload: newDtoonCard });
    }


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
        gender: '',
        role: '',
        moive: '',
        cost: ''
    });

    console.log('new dToon Object:', newDtoonCard);

    // newDtoonCard key fillers
    const handleChange = (key) => (event) => {
        console.log('eventChange happened');
        setNewDtoonCard({ ...newDtoonCard, [key]: event.target.value });
    }



    return (
        <div id="add-dtoon">

            <div>
                <h2>Create a dToon</h2>
            </div>

            <form onSubmit={createNewDtoon}>

                <div id='text-input'>
                    <CardNameInput newDtoonCard={newDtoonCard} handleChange={handleChange} />
                    <CardMovie newDtoonCard={newDtoonCard} handleChange={handleChange} />
                    <CardChar newDtoonCard={newDtoonCard} handleChange={handleChange} />
                    <CardImage newDtoonCard={newDtoonCard} handleChange={handleChange} />
                </div>


                <CardColor newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardNumber newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <AbilityOne newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <AbilityTwo newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardType newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardGender newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardRole newDtoonCard={newDtoonCard} handleChange={handleChange} />
                <CardCost newDtoonCard={newDtoonCard} handleChange={handleChange} />

                {/* <CardKind newDtoonCard={newDtoonCard} setNewDtoonCard={setNewDtoonCard} handleChange={handleChange} /> */}

                <button>Create dToon</button>
            </form>


        </div>
    )
}
export default AddDtoon;