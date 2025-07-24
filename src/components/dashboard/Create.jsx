import React, { useState } from 'react'
import getResponse from './getResponse'
import View from './View';

function Create() {
  const [formData,setFormData] = useState({title: "",desc: ""});
  const [content,setContent] = useState("");

  async function handleSubmit(e){
    e.preventDefault();
    const result = await getResponse(formData.title,formData.desc);
    setContent(result);
  }
  return (
    <div className="create-container">
      <h2>Article Writer Assistent</h2>
      {content ? 
        <View content={content}/> :
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          value={formData.title}
          onChange={(e)=>setFormData({...formData,title:e.target.value})}
          type="text" id='title' name='title'
        />
        <label htmlFor="desc">Description</label>
        <textarea 
          value={formData.desc}
          onChange={(e)=>setFormData({...formData,desc:e.target.value})}
          name="desc" id="desc"
        ></textarea>
        <button>Generate</button>
      </form>
      }
    </div>
  )
}

export default Create