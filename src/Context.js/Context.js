import axios from "axios";
import { createContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export const dataContext = createContext()

export function DataContextProvider(props) {

    function getGames() {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            headers: {
                'X-RapidAPI-Key': '6e68a2fcf6msh024522e27d61d4ap1885aejsn21df0bf550c6',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        return axios.request(options).then(response => response).catch(error => error)
    }

    function filterGames(id) {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {
                category: id,
            },
            headers: {
                'X-RapidAPI-Key': '6e68a2fcf6msh024522e27d61d4ap1885aejsn21df0bf550c6',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        return axios.request(options).then(response => response).catch(error => error)
    }

    function gamesDetails(id) {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: { id: String(id) },
            headers: {
                'X-RapidAPI-Key': '6e68a2fcf6msh024522e27d61d4ap1885aejsn21df0bf550c6',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        return axios.request(options).then(response => response).catch(error => error)
    }

    return <dataContext.Provider value={{ getGames, filterGames, gamesDetails }}>
        {props.children}
    </dataContext.Provider>
}