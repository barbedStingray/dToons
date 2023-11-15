

function AbilityOne(props) {

    return (
        <div id="abilityOne-div">
            <textarea
                value={props.abilityOne}
                onChange={(e) => props.setAbilityOne(e.target.value)}
                type="text"
                placeholder="Ability One Here...">
            </textarea>
            {props.abilityOne}
        </div>

    )
}
export default AbilityOne;