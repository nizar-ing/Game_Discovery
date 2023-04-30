import {useGenre} from "../hooks/useGenre";

export const GenreList = () => {
    const {genres} = useGenre();
    return (
        <ul>
            { genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
        </ul>
    );
};