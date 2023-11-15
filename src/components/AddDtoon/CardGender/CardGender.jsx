

function CardGender(props) {



    return(
        <div id="card-gender">

            <p>Select Gender</p>

            <label htmlFor="male"><input 
                value="male"
                onChange={(e) => props.setCardGender(e.target.value)}
                type="radio" 
                id="male" 
                name="gender">
            </input>Male</label>

            <br />

            <label htmlFor="female"><input 
                value="female"
                onChange={(e) => props.setCardGender(e.target.value)}
                type="radio" 
                id="female" 
                name="gender">
            </input>Female</label>

            <br />

            <label htmlFor="neutral"><input 
                value="neutral"
                onChange={(e) => props.setCardGender(e.target.value)}
                type="radio" 
                id="neutral" 
                name="gender">
            </input>Neutral</label>

            <br />


            {props.cardGender}
        </div>
    )
}

export default CardGender;