
import { useSelector } from 'react-redux';
import React from 'react'
import Select from 'react-select';

function CardType(props) {

    const typeKind = useSelector(store => store.setTypeKindTable);

    return (

        <div id="card-type">
            <select
                value={props.newDtoonCard.type}
                onChange={props.handleChange('type')}
                name="cardType"
            >
                {typeKind.map((type) =>
                    <option key={type.id} >{type.type}</option>
                )}
            </select>
            {props.newDtoonCard.type}

            {/* let options = [
            {value: "blues", label: "Blues" },
            {value: "rock", label: "Rock" },
            {value: "jazz", label: "Jazz" },
            {value: "orchestra", label: "Orchestra" },
            ];

            <Select options={options} /> */}


        </div>
    )
}
export default CardType;