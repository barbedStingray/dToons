

function CardRole(props) {

    return(
        <div id="card-role">

            <p>What Role did your dToon play?</p>

            <label htmlFor="hero"><input 
                value="hero"
                onChange={props.handleChange('role')}
                type="radio" 
                id="hero" 
                name="role">
            </input>Hero</label>

            <br />

            <label htmlFor="villain"><input 
                value="villain"
                onChange={props.handleChange('role')}
                type="radio" 
                id="villain" 
                name="role">
            </input>Villain</label>

            <br />

            <label htmlFor="sidekick"><input 
                value="sidekick"
                onChange={props.handleChange('role')}
                type="radio" 
                id="sidekick" 
                name="role">
            </input>Sidekick</label>

            <br />

            <label htmlFor="minion"><input 
                value="minion"
                onChange={props.handleChange('role')}
                type="radio" 
                id="minion" 
                name="role">
            </input>Minion</label>

            <br />


            {props.newDtoonCard.role}

        </div>
    )
}

export default CardRole;