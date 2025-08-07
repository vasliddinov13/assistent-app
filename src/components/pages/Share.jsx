import React, { useEffect, useState } from 'react'
import View from '../dashboard/View';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

function Share() {
    const { id } = useParams();
    const [content, setContent] = useState(null);
    useEffect(() => {
        const strData = JSON.parse(localStorage.getItem("content"));
        setContent(strData.find(item => item.id == id));
    }, [id]);
    return (
        <div className="share-container">
            <div className="share-header">
                <div>
                    <p>Title: <b>{content?.title}</b></p>
                    <p>Description: <b>{content?.description}</b></p>
                </div>
                <div>
                    <p>Date: {dayjs(content?.createdAt).format("YYYY-MM-DD")}</p>
                </div>
            </div>
            <View content={content?.content}/>
        </div>
    )
}

export default Share