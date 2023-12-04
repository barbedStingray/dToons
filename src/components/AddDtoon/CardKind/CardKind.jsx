
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function CardKind(props) {

    // Kind based on Type (Person, Animal, Legend, Object, Place)
    let kindSelector = useSelector(store => store.setTypeKindTable);
    console.log(`typeKind:`, kindSelector);

    const [kindBoxes, setKindBoxes] = useState([]);
    const [kindPostArray, setKindPostArray] = useState([]);



    // setting up the function to pass the kind array...

    const addRemoveBox = (e) => {
        console.log(`kindArray:`, props.newDtoonCard.kind);

        // setNewDtoonCard({ ...newDtoonCard, [key]: event.target.value });
        // onChange={props.handleChange('gender')}


        if (kindPostArray.indexOf(e.target.value) < 0) {
            setKindPostArray([...kindPostArray, e.target.value]);
            // props.setNewDtoonCard(kindPostArray)
        }
        else if (kindPostArray.indexOf(e.target.value) >= 0) {
            setKindPostArray(kindPostArray.filter( (kps) => kps !== e.target.value));
            // props.setNewDtoonCard.kind(kindPostArray);
        }
        else { console.log(`'exception`)}
    }






    // function that populates checkboxes based on Type selection
    function getKindCheckboxes() {
        console.log(`getting kinds based on type`);

        for (let i = 0; i < kindSelector.length; i++) {
            if (props.newDtoonCard.type === kindSelector[i].type) {
                let newKind = kindSelector[i].kind.split(',');
                console.log(`newKind:`, newKind);
                return setKindBoxes(newKind);
            }
        }
    }
    useEffect(() => {
        console.log(`useEffect for Kind`);
        getKindCheckboxes();
    }, [props.newDtoonCard.type]);


    return (
        <div id="card-kind">

            {kindBoxes.map((checkbox, i) =>
                <label>{checkbox}
                    <input
                        key={i}
                        type='checkbox'
                        value={checkbox}
                        // onClick={addRemoveBox}
                        onClick={props.handleChange('kind')}
                    >
                    </input>
                </label>

            )}

            <br />

            {kindBoxes}

            <br />

            {kindPostArray}

            <br />

            {JSON.stringify(props.newDtoonCard.kind)}

        </div>
    )
}
export default CardKind;