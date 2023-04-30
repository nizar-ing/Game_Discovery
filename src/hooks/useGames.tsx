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

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal})
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if(err instanceof CanceledError) return;
                setError(err.message);
            });
        return () => controller.abort();
    }, []);

    return {games, error};
};