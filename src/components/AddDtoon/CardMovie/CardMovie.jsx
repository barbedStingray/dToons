
export default function CardMovie(props) {

    return (
        <div id="card-movie">
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