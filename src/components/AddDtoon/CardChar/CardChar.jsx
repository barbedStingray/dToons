

function CardChar(props) {

    return (
        <div id="input-div">
            <input
                value={props.newDtoonCard.character}
                onChange={props.handleChange('character')}
                type="text"
                placeholder="character">
            </input>
            {props.newDtoonCard.character}

        </div>
    )
}
export default CardChar;