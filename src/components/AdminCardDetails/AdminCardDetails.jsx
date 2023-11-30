
import { useSelector } from 'react-redux';


function AdminCardDetails() {

    const cardDetails = useSelector(store => store.adminCardDetails);

    return (
        <div id="character-cardDetails">
            <p>Toon ID: {cardDetails[0].id}</p>
            <p>Card Name: {cardDetails.cardname}</p>
            <p>Character: {cardDetails.character}</p>
            <p>ImagePath: {cardDetails.image}</p>

            <img 
                    className={cardDetails.color} 
                    id="card-img" alt={cardDetails.character} 
                    src={cardDetails.image} 
                />

            <p>Color: {cardDetails.color}</p>
            <p>Number: {cardDetails.number}</p>
            <p>Abilityone: {cardDetails.abilityone}</p>
            <p>Abilitytwo: {cardDetails.abilitytwo}</p>
            <p>card Type: {cardDetails.type}</p>
            <p>card Kind: {cardDetails.kind}</p>
            <p>card Gender: {cardDetails.gender}</p>
            <p>card Gender: {cardDetails.role}</p>

        </div>
    )
}
export default AdminCardDetails;