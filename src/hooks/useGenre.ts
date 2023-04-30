import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {CanceledError} from "axios";
import {GenreModel} from "../models/Genre.Model";

interface FetchGenresResponse {
    count: number,
    results: GenreModel[]
}

export const useGenre = () => {
    const [genres, setGenres] = useState<GenreModel[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal})
            .then((res) => {
                setGenres(res.data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });
        return () => controller.abort();
    }, []);

    return {genres, error, isLoading};
};