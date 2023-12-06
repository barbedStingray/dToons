import { Outlet } from 'react-router-dom';

function AbilityTwo(props) {

    return (
        <div id="abilityTwo-div">
            <textarea
                value={props.newDtoonCard.abilitytwo}
                onChange={props.handleChange('abilitytwo')}
                type="text"
                placeholder="Ability Two Here...">
            </textarea>
            {props.newDtoonCard.abilitytwo}

        </div>
    )
}

export default AbilityTwo;