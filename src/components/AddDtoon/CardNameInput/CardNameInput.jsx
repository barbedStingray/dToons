
function CardNameInput(props) {



    return (
        <div id="input-div">
            <label>Name of the Card: <input
                    value={props.cardName}
                    onChange={(e) => props.setCardName(e.target.value)}
                    type="text"
                    placeholder="card name">
                </input></label>
                {props.cardName}
        </div>
    )
}

export default CardNameInput;