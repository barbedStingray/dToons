
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


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


import './AddDtoon.css';




function AddDtoon(props) {

    const history = useHistory();

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
        role: ''
    });

    console.log('new dToon Object:', newDtoonCard);


    const handleChange = (key) => (event) => {
        console.log('eventChange happened');
        setNewDtoonCard({ ...newDtoonCard, [key]: event.target.value });
    }

    // all variables of current card
    // const [cardName, setCardName] = useState('');
    // const [characterName, setCharacterName] = useState('');
    // const [color, setColor] = useState('');
    // const [number, setNumber] = useState('');
    // const [cardImage, setCardImage] = useState('');
    // const [abilityOne, setAbilityOne] = useState('');
    // const [abilityTwo, setAbilityTwo] = useState('');
    // const [cardType, setCardType] = useState('');
    // const [cardKind, setCardKind] = useState('');
    // const [cardGender, setCardGender] = useState('');
    // const [cardRole, setCardRole] = useState('');



    // POST request /dtoons
    const sendNewDtoon = (e) => {
        e.preventDefault();
        console.log(`creating your dToon...`);

        axios.post('/dtoons', {
            // cardname: cardName,
            character: characterName,
            color: color,
            number: number,
            image: cardImage,
            abilityone: abilityOne,
            abilitytwo: abilityTwo,
            type: cardType,
            kind: cardKind,
            gender: cardGender,
            role: cardRole

        }).then((response) => {

            // clear your inputs


            // fetch your dtoon list
            props.getDtoonList();

            // send to dToons list
            history.push('/');


        }).catch((error) => {
            console.log(`/dtoons POST error`, error);
            alert(`/dtoons POST error`);
        });
    }



    return (
        <div id="add-dtoon">
            <form onSubmit={sendNewDtoon}>

                <CardNameInput
                    newDtoonCard={newDtoonCard}
                    handleChange={handleChange} 
                />

                <CardChar
                    newDtoonCard={newDtoonCard}
                    handleChange={handleChange} 
                />

                <CardColor
                    newDtoonCard={newDtoonCard}
                    handleChange={handleChange} 
                />

                <CardNumber
                    newDtoonCard={newDtoonCard}
                    handleChange={handleChange} 
                />

                <CardImage
                    newDtoonCard={newDtoonCard}
                    handleChange={handleChange} 
                />

                <AbilityOne
                    newDtoonCard={newDtoonCard}
                    handleChange={handleChange} 
                />

                <AbilityTwo
                    newDtoonCard={newDtoonCard}
                    handleChange={handleChange} 
                />

                <CardType
                    newDtoonCard={newDtoonCard}
                    handleChange={handleChange}
                />

                <CardKind
                    newDtoonCard={newDtoonCard}
                    handleChange={handleChange} 
                />

                <CardGender
                    newDtoonCard={newDtoonCard}
                    handleChange={handleChange} 
                />

                <CardRole
                    newDtoonCard={newDtoonCard}
                    handleChange={handleChange} 
                />


                <button>Create dToon</button>
            </form>

        </div>
    )
}
export default AddDtoon;