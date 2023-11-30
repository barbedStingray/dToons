
function CardType(props) {

    return (
        <div id="card-type">
            <select
                value={props.newDtoonCard.type}
                onChange={props.handleChange('type')}
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
            {props.newDtoonCard.type}
        </div>
    )
}
export default CardType;