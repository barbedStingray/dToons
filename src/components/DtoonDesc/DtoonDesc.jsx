
import { useSelector } from 'react-redux';


function DtoonDesc() {

    const description = useSelector(store => store.dtoonDescription);

    return (
        <div id="character-description">
            <p>Toon ID: {description.id}</p>
            <p>Card Name: {description.cardname}</p>
            <p>Character: {description.character}</p>
            <p>ImagePath: {description.image}</p>

            <img 
                    className={description.color} 
                    id="card-img" alt={description.character} 
                    src={description.image} 
                />

            <p>Color: {description.color}</p>
            <p>Number: {description.number}</p>
            <p>Abilityone: {description.abilityone}</p>
            <p>Abilitytwo: {description.abilitytwo}</p>
            <p>card Type: {description.type}</p>
            <p>card Kind: {description.kind}</p>

        </div>
    )
}
export default DtoonDesc;