
function AbilityTwo(props) {

    return (
        <div id="abilityTwo-div">
            <textarea
                value={props.abilityTwo}
                onChange={(e) => props.setAbilityTwo(e.target.value)}
                type="text"
                placeholder="Ability Two Here...">
            </textarea>
            {props.abilityTwo}
        </div>
    )
}

export default AbilityTwo;