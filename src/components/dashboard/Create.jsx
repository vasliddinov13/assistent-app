import React, { useContext, useState } from 'react'
import getResponse from './getResponse'
import View from './View';
import { LiaSpinnerSolid } from "react-icons/lia";
import { appContext } from '../../context/appContext';

function Create() {
  const [formData, setFormData] = useState({ title: "", desc: "" });
  const [content, setContent] = useState("");
  const [loading, setLoading] = useContext(appContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if(loading) return;
    const result = await getResponse(formData.title, formData.desc, setLoading);
    setLoading(false);
    setContent(result);
  }
  return (
    <div className="create-container">
      <h2>Article Writer Assistent</h2>
      {content ?
        <View content={content} /> :
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            type="text" id='title' name='title'
            disabled={loading}
          />
          <label htmlFor="desc">Description</label>
          <textarea
            value={formData.desc}
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
            name="desc" id="desc"
            disabled={loading}
          ></textarea>
          <button className={loading ? "loading" : ""} disabled={loading}>
            Generate
            <span className='btn-loader'>
              <LiaSpinnerSolid />
            </span>
          </button>
        </form>
      } 
    </div>
  )
}

export default Create