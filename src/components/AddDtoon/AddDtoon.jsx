
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


import CardNameInput from './CardNameInput/CardNameInput';
import CharacterNameInput from './CharacterNameInput/CharacterNameInput';
import CardType from './CardType/CardType';
import CardKind from './CardKind/CardKind';


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
            kind: cardKind

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
                    setCardName={setCardName} />

                <CharacterNameInput
                    characterName={characterName}
                    setCharacterName={setCharacterName} />

                <br />

                <input
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    type="text"
                    placeholder="color">
                </input>
                {color}

                <br />

                <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    type="number"
                    placeholder="number">
                </input>
                {number}

                <br />

                <input
                    value={cardImage}
                    onChange={(e) => setCardImage(e.target.value)}
                    type="text"
                    placeholder="cardPics/Movie/picture.png">
                </input>
                {cardImage}

                <br />

                <textarea
                    value={abilityOne}
                    onChange={(e) => setAbilityOne(e.target.value)}
                    type="text"
                    placeholder="Ability One Here...">
                </textarea>
                {abilityOne}

                <br />

                <textarea
                    value={abilityTwo}
                    onChange={(e) => setAbilityTwo(e.target.value)}
                    type="text"
                    placeholder="Ability Two Here...">
                </textarea>
                {abilityTwo}

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


                <button>Create dToon</button>
            </form>

        </div>
    )
}
export default AddDtoon;