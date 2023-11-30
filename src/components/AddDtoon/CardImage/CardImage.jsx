

function CardImage(props) {

    return (
        <div id="cardImage-input">
            <input            
                value={props.newDtoonCard.image}
                onChange={props.handleChange('image')}
                type="text"
                placeholder="cardPics/Movie/picture.png">
            </input>
            {props.newDtoonCard.image}
        </div>
    )
}

export default CardImage;