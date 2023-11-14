
function CardType(props) {

    return (
        <div id="card-type">
            <select
                value={props.cardType}
                onChange={(e) => props.setCardType(e.target.value)}
                name="cardType"
                type="text"
                placeholder="card Type Here...">
                    <option value="none">Select One...</option>
                    <option value="person">Person</option>
                    <option value="animal">Animal</option>
                    <option value="legend">Legend</option>
                    <option value="object">Object</option>
                    <option value="place">Place</option>
            </select>
            {props.cardType}
        </div>
    )
}
export default CardType;