
function CardNameInput(props) {



    return (
        <div id="input-div">
            <input
                    value={props.cardName}
                    onChange={(e) => props.setCardName(e.target.value)}
                    type="text"
                    placeholder="card name">
                </input>
                {props.cardName}
        </div>
    )
}

export default CardNameInput;