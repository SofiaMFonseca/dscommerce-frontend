import React, { useState } from 'react';
import './styles.css';

type Props = {
    onSearch: Function;
}

function SearchBar({onSearch} : Props) {

    const [text, setText] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value);
    }

    function handleResetClick() {
        setText("");
        onSearch(text);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSearch(text);
    }

    return (
        <form className="dsc-search-bar" onSubmit={handleSubmit}>
            <button type="submit">🔎︎</button>
            <input
                value={text} 
                type="text" 
                placeholder="Nome do produto"
                onChange={handleChange}
            />
            <button onClick={handleResetClick}>🗙</button>
        </form>
    );
}

export default SearchBar