

function CardNumber(props) {

    return (
        <div id="card-number">
            <input
                value={props.number}
                onChange={(e) => props.setNumber(e.target.value)}
                type="number"
                placeholder="number">
            </input>
            {props.number}

        </div>
    )
}

export default CardNumber;