
import { useSelector } from 'react-redux';


export default function SoloCardDetails() {

    const cardDetails = useSelector(store => store.adminCardDetails);



    return (
        <div id="character-cardDetails">
            {cardDetails.map((dtoon) =>
                <>
                    {/* <p>Toon ID: {dtoon.id}</p> */}
                    <p>Card Name: {dtoon.cardname}</p>
                    <p>Character: {dtoon.character}</p>
                    {/* <p>ImagePath: {dtoon.image}</p> */}

                    <img
                        className={dtoon.color}
                        id="card-img" alt={dtoon.character}
                        src={dtoon.image}
                    />

                    {/* <p>Color: {dtoon.color}</p> */}
                    {/* <p>Number: {dtoon.number}</p> */}
                    <p>Abilityone: {dtoon.abilityone}</p>
                    <p>Abilitytwo: {dtoon.abilitytwo}</p>
                    <p>card Type: {dtoon.type}</p>

                    {/* {dtoon.kind.map((item) =>
                    <p>{item}</p>)} */}
                    {/* <p>card Kind: {dtoon.kind[0]}</p> */}

                    <p>card Gender: {dtoon.gender}</p>
                    <p>card role: {dtoon.role}</p>
                    <p>card movie: {dtoon.movie}</p>
                    <p>card cost: {dtoon.cost}</p>
                </>
            )}
        </div>
    )
}