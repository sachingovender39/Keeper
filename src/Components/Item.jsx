import React from 'react'

function Item(props){
    const title =props.title;
    const details = props.content
    return <div className='note'>
        <h1>{title}</h1>
        <p>{details}</p>
    </div>
}
export default Item;