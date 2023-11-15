

function CardChar(props) {

    return (
        <div id="input-div">
            <input
                value={props.characterName}
                onChange={(e) => props.setCharacterName(e.target.value)}
                type="text"
                placeholder="character">
            </input>
            {props.characterName}

        </div>
    )
}
export default CardChar;