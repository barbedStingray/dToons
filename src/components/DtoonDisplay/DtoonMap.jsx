
import DtoonCard from '../DtoonCard/DtoonCard.jsx';

function DtoonDisplay(props) {

    return (
        <div id="dtoon-display">
            {
                props.dtoonList.map((dtoon) => 
                    (<DtoonCard 
                        key={dtoon.id}
                        dtoon={dtoon}
                        getDtoonList={props.getDtoonList}
                    />))
            }

        </div>
    )
}

export default DtoonDisplay;