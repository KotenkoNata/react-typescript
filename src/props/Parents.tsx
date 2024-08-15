import {ChildAsFC } from "./Child";

const Parents = () =>{
    return <ChildAsFC color='red' onClick={()=>{console.log('Clicked')}}>
        sfksdfj
    </ChildAsFC>
};

export default Parents;