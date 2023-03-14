const Movielist = ({my}) => {
    return (
          my.map(({ poster_path, name, title, id }) =>
            (<li key={id}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={''} width={200} />
                <p>{title}</p>
                <p>{name}</p>
            </li>))
            )
}

export default Movielist;