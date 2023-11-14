
function CardKind(props) {


    // if (props.cardType === 'person') {
    //     <> <option value="king">King</option>
    //         <option value="queen">Queen</option>
    //         <option value="princess">Princess</option> </>
    // }
    // else if (props.cardType === 'animal') {
    //     <> <option value="bug">Bug</option>
    //         <option value="bird">Bird</option>
    //         <option value="dinosaur">Dinosaur</option> </>
    // }
    // else {
    //     <option value="none">please select...</option>
    // }


    return (
        <div id="card-kind">
            <input
                value={props.cardKind}
                onChange={(e) => props.setCardKind(e.target.value)}
                type="checkbox" >
            </input>
            {props.cardKind}

        </div>
    )
}
export default CardKind;