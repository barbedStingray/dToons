

function CardNumber(props) {

    return (
        <div id="card-number">
            <input
                value={props.newDtoonCard.number}
                onChange={props.handleChange('number')}
                type="number"
                placeholder="number">
            </input>
            {props.newDtoonCard.number}

        </div>
    )
}

export default CardNumber;