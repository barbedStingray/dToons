
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


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
                abilitytwo: abilityTwo
            
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

        {/* Card Name  */}
                <input
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    type="text"
                    placeholder="card name">
                </input>
                {cardName}

                <br />
                
        {/* Character Name  */}
                <input 
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                    type="text"
                    placeholder="character">
                </input>
                {characterName}

                <br />
                
        {/* Character color  */}
                <input 
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    type="text"
                    placeholder="color">
                </input>
                {color}

                <br />
                
        {/* Character number  */}
                <input 
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    type="number"
                    placeholder="number">
                </input>
                {number}

                <br />
                
        {/* Character image  */}
                <input 
                    value={cardImage}
                    onChange={(e) => setCardImage(e.target.value)}
                    type="text"
                    placeholder="cardPics/Movie/picture.png">
                </input>
                {cardImage}

                <br />
                
        {/* Character image  */}
                <textarea 
                    value={abilityOne}
                    onChange={(e) => setAbilityOne(e.target.value)}
                    type="text"
                    placeholder="Ability One Here...">
                </textarea>
                {abilityOne}

                <br />
                
        {/* Character image  */}
                <textarea 
                    value={abilityTwo}
                    onChange={(e) => setAbilityTwo(e.target.value)}
                    type="text"
                    placeholder="Ability Two Here...">
                </textarea>
                {abilityTwo}

                <br />

                <button>Create dToon</button>
            </form>

        </div>
    )
}
export default AddDtoon;