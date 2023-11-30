

function AbilityOne(props) {

    return (
        <div id="abilityOne-div">
            <textarea
                value={props.newDtoonCard.abilityone}
                onChange={props.handleChange('abilityone')}
                type="text"
                placeholder="Ability One Here...">
            </textarea>
            {props.newDtoonCard.abilityone}
        </div>

    )
}
export default AbilityOne;