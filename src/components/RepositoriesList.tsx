import React from "react";
import {useEffect, useState} from "react";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

    }

    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    </div>
}

export default RepositoriesList;