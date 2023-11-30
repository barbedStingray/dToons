
function CardNameInput(props) {



    return (
        <div id="input-div">
            <label><input
                    value={props.newDtoonCard.cardname}
                    onChange={props.handleChange('cardname')}
                    type="text"
                    placeholder="card name">
                </input></label>
                {props.newDtoonCard.cardname}
        </div>
    )
}

export default CardNameInput;