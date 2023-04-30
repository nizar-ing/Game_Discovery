import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {Game} from "../models/Game.Model";
import {CanceledError} from "axios";

interface FetchGamesResponse {
    count: number,
    results: Game[]
}

export const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal})
            .then((res) => {
                setGames(res.data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });
        return () => controller.abort();
    }, []);

    return {games, error, isLoading};
};