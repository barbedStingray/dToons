
import { useState } from 'react';

function CardKind(props) {

    // Kind based on Type (Person, Animal, Legend, Object, Place)
    const personArray = ['human', 'king', 'princess'];
    const animalArray = ['bug', 'elephant', 'dog'];
    const legendArray = ['geenie', 'dragon', 'alien'];
    const objectArray = ['toy', 'vehicle', 'item'];
    const placeArray = ['town', 'castle', 'event'];


    const [kindArray, setKindArray] = useState('');

    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        console.log(`checked before:`, checked)
        setChecked(!checked);
        console.log(`checked after:`, checked);
    };

    return (
        <div id="card-kind">
            <label>Queen
                <input
                    type='checkbox'
                    value='queen'
                    onChange={handleClick}
                    checked={checked}
                    // onChange={(e) => setKindArray(e.target.value)}
                >
                </input>
            </label>

            <label>King
                <input
                    type='checkbox'
                    value='king'
                    onChange={(e) => setKindArray(e.target.value)}
                >
                </input>
            </label>

            {kindArray}



        </div>
    )
}
export default CardKind;