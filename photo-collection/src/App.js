import React from "react";
import "./App.scss";
import { Collection } from "./Collection";

const category = [
    { name: "Все" },
    { name: "Море" },
    { name: "Горы" },
    { name: "Архитектура" },
    { name: "Города" },
];

function App() {
    const [collections, setCollections] = React.useState([]);
    const [categoryId, setCategoryId] = React.useState(0);
    const [searchValue, setSearchValue] = React.useState("");

    React.useEffect(() => {
        fetch(
            `https://64056fdfeed195a99f82a6e3.mockapi.io/photo-collection?${
                categoryId ? `category=${categoryId}` : ""
            }`
        )
            .then((res) => res.json())
            .then((json) => {
                setCollections(json);
            })
            .catch((err) => {
                console.warn(err);
                alert("Ошибка");
            });
    }, [categoryId]);

    return (
        <div className="App">
            <h1>Моя коллекция фотографий</h1>
            <div className="top">
                <ul className="tags">
                    {category.map((obj, index) => (
                        <li
                            onClick={() => setCategoryId(index)}
                            className={categoryId === index ? "active" : ""}
                            key={obj.name}
                        >
                            {obj.name}
                        </li>
                    ))}
                </ul>
                <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="search-input"
                    placeholder="Поиск по названию"
                />
            </div>
            <div className="content">
                {collections
                    .filter((obj) => {
                        return obj.name
                            .toLowerCase()
                            .includes(searchValue.toLowerCase());
                    })
                    .map((obj, index) => (
                        <Collection
                            key={index}
                            name={obj.name}
                            images={obj.photos}
                        />
                    ))}
            </div>
        </div>
    );
}

export default App;
