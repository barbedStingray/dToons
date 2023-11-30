

function CardGender(props) {



    return(
        <div id="card-gender">

            <p>Select Gender</p>


            <label htmlFor="male"><input 
                value="male"
                onChange={props.handleChange('gender')}
                type="radio" 
                id="male" 
                name="gender">
            </input>Male</label>

            <br />

            <label htmlFor="female"><input 
                value="female"
                onChange={props.handleChange('gender')}
                type="radio" 
                id="female" 
                name="gender">
            </input>Female</label>

            <br />

            <label htmlFor="neutral"><input 
                value="neutral"
                onChange={props.handleChange('gender')}
                type="radio" 
                id="neutral" 
                name="gender">
            </input>Neutral</label>

            <br />


            {props.newDtoonCard.gender}
        </div>
    )
}

export default CardGender;