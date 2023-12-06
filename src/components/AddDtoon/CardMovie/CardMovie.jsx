
export default function CardMovie(props) {

    return (
        <div id="cardMovie-input">
            <input
                value={props.newDtoonCard.movie}
                onChange={props.handleChange('movie')}
                type="text"
                placeholder="movie">
            </input>
            {props.newDtoonCard.movie}

        </div>
    )
}