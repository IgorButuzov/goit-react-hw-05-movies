import { Link } from "react-router-dom";


const Movielist = ({bestMovies}) => {
    return (
        bestMovies.map(({ poster_path, name, title, id }) =>
            (<Link key={id} to={`${id}`}>
            <li >
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={''} width={200} />
                <p>{title}</p>
                <p>{name}</p>
            </li>
            </Link>
            ))
            )
}

export default Movielist;