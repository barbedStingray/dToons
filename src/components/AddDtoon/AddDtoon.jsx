
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
    const [cardName, setCardName] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [color, setColor] = useState('');
    const [number, setNumber] = useState('');
    const [cardImage, setCardImage] = useState('');
    const [abilityOne, setAbilityOne] = useState('');
    const [abilityTwo, setAbilityTwo] = useState('');
    const [cardType, setCardType] = useState('');
    const [cardKind, setCardKind] = useState('');
    const [cardGender, setCardGender] = useState('');
    const [cardRole, setCardRole] = useState('');



    // POST request /dtoons
    const sendNewDtoon = (e) => {
        e.preventDefault();
        console.log(`creating your dToon...`);

        axios.post('/dtoons', {
            cardname: cardName,
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
                    cardName={cardName}
                    setCardName={setCardName} 
                />

                <CardChar
                    characterName={characterName}
                    setCharacterName={setCharacterName} 
                />

                <CardColor
                    color={color}
                    setColor={setColor}
                />

                <CardNumber
                    number={number}
                    setNumber={setNumber}
                />

                <CardImage 
                    cardImage={cardImage}
                    setCardImage={setCardImage}
                />

                <AbilityOne 
                    abilityOne={abilityOne}
                    setAbilityOne={setAbilityOne}
                />

                <AbilityTwo
                    abilityTwo={abilityTwo}
                    setAbilityTwo={setAbilityTwo}
                />

                <CardType 
                    cardType={cardType}
                    setCardType={setCardType}
                />

                <CardKind
                    cardKind={cardKind}
                    setCardKind={setCardKind}
                    cardType={cardType}
                    setCardType={setCardType}
                />

                <CardGender 
                    cardGender={cardGender}
                    setCardGender={setCardGender}
                />

                <CardRole 
                    cardRole={cardRole}
                    setCardRole={setCardRole}
                />


                <button>Create dToon</button>
            </form>

        </div>
    )
}
export default AddDtoon;