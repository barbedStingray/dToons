
import { useSelector } from 'react-redux';
import React from 'react'

function CardType(props) {

    const typesTable = useSelector(store => store.setTypesTable);


    return (

        <div id="card-type">
            <select
                value={props.newDtoonCard.type}
                onChange={props.handleChange('type')}
                name="cardType"
            >
                {typesTable.map((type) =>
                    <option key={type.id} value={type.id}>{type.type}</option>
                )}
            </select>
            {props.newDtoonCard.type}

        </div>
    )
}
export default CardType;