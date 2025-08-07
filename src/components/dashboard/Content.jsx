import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import View from './View';
import { IoShareSocialOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import toast from 'react-hot-toast';

function Content() {
    const {id} = useParams();
    const [content,setContent] = useState(null);
    useEffect(()=>{
        const strData = JSON.parse(localStorage.getItem("content"));
        setContent(strData.find(item => item.id == id));
    },[id]);
    console.log(content);
    const handleCopy = async ()=>{
        try {
            await navigator.clipboard.writeText(content.content);
            toast.success("Successfuly copied to clipboard.");
        } catch (error) {
            toast.error("Failed to copy to clipboard.");
        }
    }
    const handleShare = async ()=>{
        try {
            const {origin} = window.location;
            await navigator.clipboard.writeText(`${origin}/share/${id}`);
            toast.success("Share link successfuly copied to clipboard.");
        } catch (error) {
            toast.error("Failed to copy share link to clipboard.");
        }
    }
    return (
        <div className='content-wrapper'>
            {
                content ? 
                <>
                    <View content={content.content}/>
                    <div className="content-footer">
                        <button onClick={handleShare}>
                            <IoShareSocialOutline />
                        </button>
                        <button onClick={handleCopy}>
                            <IoCopyOutline />
                        </button>
                    </div>
                </> :
                <h2>404 <br/> Article not found.</h2> 
            }
        </div>
    )
}

export default Content