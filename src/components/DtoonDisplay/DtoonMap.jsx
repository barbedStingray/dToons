
function DtoonDisplay(props) {

    return (
        <div id="dtoon-display">
            {
                props.dtoonList.map((dtoon) => 
                <>
                    <p>{dtoon.character}</p>
                    <p>{dtoon.number}</p>
                    <p>{dtoon.color}</p>
                </>)
            }

        </div>
    )
}

export default DtoonDisplay;