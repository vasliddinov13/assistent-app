import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import View from './View';

function Content() {
    const {id} = useParams();
    const [content,setContent] = useState(null);
    useEffect(()=>{
        const strData = JSON.parse(localStorage.getItem("content"));
        setContent(strData.find(item => item.id == id));
    },[id]);
    console.log(content);
    return (
        <div className='content-wrapper'>
            {
                content ? 
                <View content={content.content}/> :
                <h2>404 <br/> Article not found.</h2> 
            }
        </div>
    )
}

export default Content