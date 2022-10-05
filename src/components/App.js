import React, {useState} from "react";
import SearchBar from "./SearchBar";
import AnimalList from "./AnimalList";
import api from "../api";

const App = () => {

    const [animals, setAnimal] = useState([]);

    const searchAnimal = async (text) => {
        const response = await api.get(`africa/animals`, {
            params: {
                search: text
            }
        });
        setAnimal(response.data);
    };

    return (
        <div className="ui container">
            <SearchBar onSubmit={searchAnimal}/>
            <AnimalList animals={animals}/>
        </div>
    );
}

export default App
