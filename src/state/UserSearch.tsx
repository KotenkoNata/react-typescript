import React, {useState} from "react";

const users = [
    {name: "Sarah", age: 30},
    {name: "Max", age: 21},
    {name: "Michael", age: 20}
]

const UserSearch:React.FC = () => {
    const [name, setName] = useState("");

    const onClick = ()=>{

    }

    return <div>
        UserSearch
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={onClick}>Find User</button>
    </div>
}

export default UserSearch;