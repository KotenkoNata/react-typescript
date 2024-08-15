import React from "react";

const EventComponent:React.FC = () => {
    const onChange=(event: React.ChangeEventHandler<HTMLInputElement>)=>{
        console.log(event)
    }

    const onDragStart = (event: React.DragEventHandler<HTMLDivElement>)=>{
        console.log(event);
    }

    return <div>
        <input onChange={onChange} />
        <div draggable onDragStart={onDragStart}>Drag me!</div>
    </div>
}

export default EventComponent;