


function CardColor(props) {

    return (
        <div id="card-color">

            <input
                value={props.newDtoonCard.color}
                onChange={props.handleChange('color')}
                type="text"
                placeholder="color">
            </input>
            {props.newDtoonCard.color}

        </div>
    )
}

export default CardColor;