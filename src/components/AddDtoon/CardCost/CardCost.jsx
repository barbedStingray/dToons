

export default function CardCost(props) {

    return (
        <div id="card-cost">
            <input
                value={props.newDtoonCard.cost}
                onChange={props.handleChange('cost')}
                type="number"
                placeholder="cost">
            </input>
            {props.newDtoonCard.cost}

        </div>
    )
}