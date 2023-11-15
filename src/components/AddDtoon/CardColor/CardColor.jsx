

function CardColor(props) {

    return (
        <div id="card-color">
            <input
                value={props.color}
                onChange={(e) => props.setColor(e.target.value)}
                type="text"
                placeholder="color">
            </input>
            {props.color}

        </div>
    )
}

export default CardColor;