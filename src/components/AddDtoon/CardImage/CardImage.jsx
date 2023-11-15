

function CardImage(props) {

    return (
        <div id="cardImage-input">
            <input
                value={props.cardImage}
                onChange={(e) => props.setCardImage(e.target.value)}
                type="text"
                placeholder="cardPics/Movie/picture.png">
            </input>
            {props.cardImage}
        </div>
    )
}

export default CardImage;